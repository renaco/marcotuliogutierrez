import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import Seven from '../img/7.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Marco Tulio Gutierrez" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/junta-directiva">
                Junta Directiva
              </Link>
              <Link className="navbar-item" to="/hoja-de-vida">
                Hoja de vida
              </Link>
              <Link className="navbar-item" to="/videos">
                Videos
              </Link>
              <Link className="navbar-item" to="/app-cal">
                App CAL
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a href="whatsapp://send?text=Si a la descentralización del CAL #TÚMECONOCES! Marca el 7 http://marcotuliogutierrez.com/" data-action="share/whatsapp/share">
                <strong>¡Comparte! </strong>
                <svg width="22" height="23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 23l1.554-5.906a11.736 11.736 0 01-1.462-5.698C.094 5.112 5.008 0 11.046 0c2.93.001 5.68 1.188 7.749 3.342C20.863 5.497 22 8.36 22 11.406c-.003 6.283-4.917 11.397-10.954 11.397h-.005a10.61 10.61 0 01-5.234-1.388L0 23zm6.076-3.648l.333.205c1.397.863 3 1.32 4.634 1.32h.003c5.018 0 9.102-4.249 9.104-9.472.001-2.531-.945-4.912-2.664-6.702-1.719-1.79-4.005-2.777-6.437-2.778-5.022 0-9.106 4.25-9.108 9.472 0 1.79.48 3.533 1.392 5.041l.217.359-.92 3.495 3.446-.94z" fill="#fff"/><path d="M.38 22.602l1.501-5.701A11.329 11.329 0 01.47 11.4C.472 5.333 5.216.397 11.044.397c2.829.002 5.484 1.147 7.48 3.227 1.997 2.08 3.096 4.844 3.095 7.784-.003 6.066-4.747 11.002-10.575 11.002h-.004c-1.77 0-3.509-.463-5.053-1.339L.38 22.602z" fill="url(#paint0_linear)"/><path d="M0 23l1.554-5.906a11.736 11.736 0 01-1.462-5.698C.094 5.112 5.008 0 11.046 0c2.93.001 5.68 1.188 7.749 3.342C20.863 5.497 22 8.36 22 11.406c-.003 6.283-4.917 11.397-10.954 11.397h-.005a10.61 10.61 0 01-5.234-1.388L0 23zm6.076-3.648l.333.205c1.397.863 3 1.32 4.634 1.32h.003c5.018 0 9.102-4.249 9.104-9.472.001-2.531-.945-4.912-2.664-6.702-1.719-1.79-4.005-2.777-6.437-2.778-5.022 0-9.106 4.25-9.108 9.472 0 1.79.48 3.533 1.392 5.041l.217.359-.92 3.495 3.446-.94z" fill="url(#paint1_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8.308 6.632c-.205-.474-.42-.484-.616-.492-.16-.007-.342-.007-.524-.007a.988.988 0 00-.73.357c-.25.285-.958.974-.958 2.375 0 1.402.98 2.756 1.118 2.946.136.19 1.893 3.158 4.675 4.3 2.312.949 2.783.76 3.284.713.502-.048 1.62-.69 1.848-1.354.228-.665.228-1.236.16-1.355-.069-.118-.252-.19-.525-.332-.274-.143-1.62-.832-1.87-.927-.251-.095-.434-.142-.616.143-.183.285-.707.926-.867 1.116-.16.19-.32.214-.593.072-.274-.143-1.155-.443-2.2-1.414-.814-.755-1.364-1.687-1.523-1.972-.16-.285-.018-.44.12-.582.123-.127.274-.332.41-.498.137-.167.183-.286.274-.475.091-.19.045-.357-.023-.5-.068-.142-.6-1.55-.844-2.114z" fill="#fff"/><defs><linearGradient id="paint0_linear" x1="11" y1="22.602" x2="11" y2=".398" gradientUnits="userSpaceOnUse"><stop stop-color="#20B038"/><stop offset="1" stop-color="#60D66A"/></linearGradient><linearGradient id="paint1_linear" x1="11" y1="23" x2="11" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#F9F9F9"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></svg>
              </a>
              <a
                className="navbar-item"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={Seven} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
