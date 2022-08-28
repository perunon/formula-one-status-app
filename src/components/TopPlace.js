import React from 'react';
import { Fade } from 'react-reveal';

const TopPlace = ({ driver, place }) => {
  const driverName =
    driver.name.slice(0, 3).toUpperCase() +
    driver.lastName
      .slice(0, 3)
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  const imgUrl = `https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/homepage/driver-standings-component/${driverName}01.png.transform/4col/image.png`;
  return (
    <div className="topPlaceContainer">
      <div className="driverImg">
        <Fade duration={2000}>
          <img src={imgUrl} alt="chuj" />
        </Fade>
        <Fade up>
          <div className="topLeft">
            {place}
            <div style={{ fontSize: '14px' }}>
              {driver.points} <br />
              pts
            </div>
          </div>
        </Fade>
      </div>
      <Fade right>
        <div className="summary">
          <div style={{ fontSize: '24px', textTransform: 'uppercase' }}>
            {driver.name}
          </div>
          <div style={{ textTransform: 'uppercase' }}>{driver.lastName}</div>
          <div style={{ fontSize: '16px' }}>{driver.constructor}</div>
        </div>
      </Fade>
    </div>
  );
};

export default TopPlace;
