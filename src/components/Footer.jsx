import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Follow us on:
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;