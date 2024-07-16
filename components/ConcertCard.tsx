import React from 'react';

type ConcertCardProps = {
  title: string;
  times: string;
  image: string;
};

export const ConcertCard: React.FC<ConcertCardProps> = ({ title, times, image }) => {
  return (
    <div className="flex bg-gradient-to-r from-stone-800 from-10% via-stone-300 via-30% to-stone-300 to-90% ... rounded-xl shadow-md overflow-hidden my-6 mx-12 lg:mx-40 xl:mx-96 select-none transition-all duration-300 hover:to-stone-100 hover:translate-x-6">
      <div className="w-1/3 md:w-1/4"> 
        <img src={`/card-pictures/${image}`} alt={title} className="object-cover w-full h-full lg:rounded-r-full" />
      </div>
      <div className="flex flex-col justify-center p-4 ml-2">
        <h2 className="sm:text-6xl text-2xl font-semibold text-neutral-800">{title}</h2>
        <p className="text-neutral-800 font-bold md:text-2xl text-lg tracking-wide">times: <strong className='text-red-600'>{times}</strong></p>
      </div>
    </div>
  );
};
