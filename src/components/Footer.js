import React from 'react'
import { Link } from 'gatsby'

import Seven from '../img/7.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import youtube from '../img/social/youtube.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-blue has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={Seven}
            alt="Marco Tulio Gutierrez"
          />
        </div>
        <div className="content has-text-centered has-background-blue has-text-white-ter">
          <div className="container has-text-white-ter">
            <div className="columns">
              <div className="column is-6">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/junta-directiva">
                        Junta Directiva
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/su-vida">
                        Su vida
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/videos">
                        Videos
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/app-cal">
                        App CAL
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-6 social">
                <a title="facebook" href="https://www.facebook.com/Marco-Tulio-Gutierrez-110818827032764/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/MarcoTulioG/">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/marco_tulio_gutierrez/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/channel/UCYGzRO0jMM4K5SrizVym-sg/">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
