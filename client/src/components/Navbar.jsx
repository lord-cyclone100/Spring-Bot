import './Navbar.scss';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="/springbot-logo-primary.svg" 
            alt="SpringBot" 
            className="logo-image"
          />
        </div>
      </div>
    </nav>
  );
};