import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import TopThree from '../components/TopThree';
import { useStandings } from '../customHooks/useStandings';
import Navbar from '../components/Navbar';
import StandingsTable from '../components/StandingsTable';

const Standings = () => {
  const standings = useStandings();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (standings != null) {
      setIsLoading(false);
    }
  }, [standings, isLoading]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <>
      <ReactFullpage
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <TopThree drivers={standings.slice(0, 3)} />
                </div>
                <div className="section">
                  <StandingsTable drivers={{ standings }} />
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
      <Navbar />
    </>
  );
};

export default Standings;
