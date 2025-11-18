import styles from './styles.module.css';

type DefaultInputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>;

export default function DefaultInput({ id, type,  labelText, ...rest }: DefaultInputProps) {
    return (
        <>
            <p><label htmlFor={id}>{labelText}</label></p>
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    );
}
