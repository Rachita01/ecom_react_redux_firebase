import React from 'react';
import Biscuit from './../../assets/Biscuits.jpeg';
import Chocolate from './../../assets/Chocolate.jpg';
import './styles.scss';
const Directory = props => {
return(
    <div className="Directory">
        <div className="wrap">
      <div className="item"
          style={{
              backgroundImage: `url(${Biscuit})`
          }}>
              <a href="abc.html">Go here for Biscuits</a>
      </div>
      <div className="item"
          style={{
              backgroundImage:`url(${Chocolate})`
          }}>
              <a href="edf.html">Go here for Chocolates</a>
      </div>
      </div>
    </div>
);
};

export default Directory;