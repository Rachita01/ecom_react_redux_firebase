import React from 'react';
import './styles.scss';
import Logo from './../../assets/JHFLogo.png';
import {Link} from 'react-router-dom';

const Header = props => {
        return(
            <header className="header">
              <div className="wrap">
                  <div className="logo">
                      <Link to="/">
                      <img src={Logo} alt="Jindal Healthy Foods"></img>
                      </Link>
                  </div>
                  <div className="CallToAction">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                  </div>
              </div>
            
            </header>
        );
};

export default Header;