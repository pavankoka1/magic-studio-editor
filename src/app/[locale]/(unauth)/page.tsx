import React from 'react';

import FirstFold from '@/components/home/first-fold';

function HomePage() {
  return (
    <div
      className="h-screen w-screen overflow-scroll"
      style={{
        backgroundImage:
          // 'linear-gradient( to bottom right,  rgba(131,204,255,1) 0.4%, rgba(66,144,251,1) 100.3% )',

          'linear-gradient( to bottom right, rgb(255, 255, 255), rgba(38,29,109,0.4))',
      }}
    >
      <FirstFold />
    </div>
  );
}

export default HomePage;
