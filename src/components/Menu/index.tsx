import styles from './styles.module.css'
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

type AvailableThemes = 'light' | 'dark';

export default function Menu() {

    const [theme, setTheme] =  useState<AvailableThemes>(() => {
        const savedTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return savedTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>,
    };


    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();

        setTheme(
            prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });

    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
    <nav className={styles.menu}>
        <a className={styles.menuLink} href="#" area-label="Home" title='Home'>
            <HouseIcon/>
        </a>
        <a className={styles.menuLink} href="#" area-label="History" title='History'>
            <HistoryIcon/>
        </a>
        <a className={styles.menuLink} href="#" area-label="Settings" title='Settings'>
            <SettingsIcon/>
        </a>
        <a className={styles.menuLink} href="#" area-label="Theme" title='Theme' onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </a>
    </nav>
    );
} 