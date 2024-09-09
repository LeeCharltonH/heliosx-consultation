import logo from '../../logo.png';
import mobileLogo from '../../mobileLogo.png';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="https://www.heliosx.com/" target="_blank" rel="noreferrer">
        <picture>
          <source media="(min-width: 480px)" srcSet={logo} />
          <source media="(max-width: 480px)" srcSet={mobileLogo} />
          <img src={logo} alt="HeliosX logo" />
        </picture>
      </a>
    </header>
  );
};
