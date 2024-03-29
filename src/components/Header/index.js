import React from 'react';
import './styles.scss';
import Logo from './../../assets/JHFLogo.png';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/utils';

const Header = props => {
    const {currentUser} = props;
        return(
            <header className="header">
              <div className="wrap">
                  <div className="logo">
                      <Link to="/">
                      <img src={Logo} alt="Jindal Healthy Foods"></img>
                      </Link>
                  </div>
                  <div className="CallToAction">
                      {currentUser && (
                          <ul>
                              <li>
                                  <span onClick={() => auth.signOut()}>
                                      Logout
                                  </span>
                              </li>
                          </ul>
                      )}
                      {!currentUser && (
                            <ul>
                            <li>
                                <Link to="/registration">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                      )}
                   
                  </div>
              </div>
            
            </header>
        );
        };
        Header.defaultProps = {
            currentUser:null
        };
 

export default Header;