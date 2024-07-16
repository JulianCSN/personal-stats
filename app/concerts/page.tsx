import React from 'react';
import { ConcertCard } from '@/components/ConcertCard';
import { IoMusicalNote, IoArrowBackCircle } from "react-icons/io5";
import Link from 'next/link';

export default function Concerts() {
  return (
    <div>
    <header className="flex justify-center items-center">
      <div className="absolute left-4 top-4">
          <Link href="/">
            <button className='text-red-500 text-5xl transition-all duration-300 hover:scale-125'>
              <IoArrowBackCircle/>
            </button>
          </Link>
        </div>
      <div className="text-left mt-16 select-none">
        <div className="flex">
          <h1 className="md:text-9xl text-5xl text-red-500 -mt-2">CONCERTS</h1>
          <IoMusicalNote className="absolute md:text-7xl text-3xl text-yellow-400 md:-ml-0 -ml-0.5 md:mt-6 mt-0"/>
        </div>
      </div>
    </header>
    <div className='text-white text-center text-lg md:text-2xl'>
      <p>list of all the concerts I have attended</p>
    </div>
    <ConcertCard
      title='Saint Motel'
      times='1'
      image='saintMotel.webp'
    />
    <ConcertCard
      title='Twenty One Pilots'
      times='1'
      image='top.webp'
    />
    <ConcertCard
      title='los Flakos'
      times='1'
      image='losFlakos.jpg'
    />
    <ConcertCard
      title='Dayglow'
      times='1'
      image='dayglow.jpg'
    />
    <ConcertCard
      title='The Warning'
      times='2'
      image='theWarning.jpg'
    />
    <ConcertCard
      title='Muse'
      times='1'
      image='muse.jpeg'
    />
    <ConcertCard
      title='Antiwa'
      times='2'
      image='antiwa.jpg'
    />
    <ConcertCard
      title='Porter'
      times='1'
      image='porter.webp'
    />
    <ConcertCard
      title='Sofia Campos'
      times='1'
      image='sofiaCampos.jpg'
    />
    <ConcertCard
      title='caloncho'
      times='1'
      image='caloncho.jpg'
    />
    <ConcertCard
      title='Almost Monday'
      times='1'
      image='almostMonday.webp'
    />
    <ConcertCard
      title='The Driver Era'
      times='1'
      image='tde.jpg'
    />
  </div>
  );
}
