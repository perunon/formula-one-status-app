import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import TopThree from '../components/TopThree';
import { useStandings } from '../customHooks/useStandings';

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
    <ReactFullpage
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <TopThree drivers={standings.slice(0, 3)} />
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Standings;
