import { useEffect, useState } from 'react';

export const useStandings = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const response = await fetch(
      'https://ergast.com/api/f1/current/driverStandings.json'
    );
    const result = await response.json();
    let data =
      await result.MRData.StandingsTable.StandingsLists[0].DriverStandings.map(
        ({ Driver, Constructors, positionText, points }) => {
          return {
            name: Driver.givenName,
            lastName: Driver.familyName,
            position: positionText,
            points: points,
            constructor: Constructors[0].name,
          };
        }
      );
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};
