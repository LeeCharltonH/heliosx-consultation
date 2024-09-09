import styles from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ value, disabled, type = 'button', onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick} className={styles.button}>
      {value}
    </button>
  );
};
