import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://www.heliosx.com/" target="_blank" rel="noreferrer">
          HeliosX Homepage
        </a>
      </div>
      <div>
        <a href="https://www.heliosx.com/#footer" target="_blank" rel="noreferrer">
          Contact
        </a>
      </div>
    </footer>
  );
};
