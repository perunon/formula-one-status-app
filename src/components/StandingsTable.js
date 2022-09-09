import React from 'react';

const StandingsTable = ({ drivers }) => {
  const data = drivers.standings;
  return (
    <div className="top3 standingsTableWrapper">
      {data.map((item) => {
        return (
          <div className="item">
            <div className="flex">
              <div className="position">{item.position}.</div> {item.name}{' '}
              {item.lastName}
            </div>
            <div>{item.points} points </div>
          </div>
        );
      })}
    </div>
  );
};

export default StandingsTable;
