import React from 'react';
import TopPlace from './TopPlace';

const TopThree = ({ drivers }) => {
  return (
    <div className="top3">
      <TopPlace driver={drivers[1]} place="2ND" />
      <div style={{ marginBottom: '100px' }}>
        <TopPlace driver={drivers[0]} place="1ST" />
      </div>
      <TopPlace driver={drivers[2]} place="3RD" />
    </div>
  );
};

export default TopThree;
