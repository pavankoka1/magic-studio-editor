'use client';

import React from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import HubIcon from '@mui/icons-material/Hub';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Fade, Slide } from 'react-awesome-reveal';

function FirstFold() {
  return (
    <div className="relative w-screen h-screen">
      <p className="h-14 w-screen bg-[#261d6d]" />
      <div className="absolute left-12 top-20 z-50 flex gap-3 items-center">
        <Image
          src="/assets/logos/vs-infotech.png"
          alt="logo"
          width={100}
          height={100}
        />
        <p className="w-[1px] bg-secondary rounded h-14" />
        <HubIcon sx={{ color: '#F0EAD6' }} />
      </div>
      <div
        className="w-screen overflow-hidden"
        style={{
          background: `linear-gradient(to right, rgba(38,29,109,0.8) 0%, rgba(38,29,109,0.7) 70%, rgba(38,29,109,0.1) 100%),
url('/assets/images/people-working.jpg') center/cover`,
          height: 'calc(100vh - 56px)',
        }}
      >
        <Slide>
          <p className="text-[#fff] mt-32 ml-16 z-40 text-5xl">
            Slide animation
          </p>
        </Slide>
        <Fade
          // delay={1000}
          cascade
          // damping={0.3}
          className="text-[#fff] mt-32 ml-16 z-40 text-7xl tracking-wide"
        >
          Pavan Koka
          {/* <p className="text-[#fff] mt-32 ml-16 z-40 text-7xl">Koka</p> */}
        </Fade>
      </div>
    </div>
  );
}

export default FirstFold;
