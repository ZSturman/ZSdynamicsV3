import Image from 'next/image';
import React from 'react';

const UnderConstruction = () => {

  const defaultTitle = "Under Construction"
  const defaultMessage = "We're working hard to build something amazing. Please check back soon!"

  const customTitle = "I was hoping you weren't going to see this.."
  const customMessage = "I just updated the layout design at 8:35 am on Monday, March 25th, 2024 Sydney time. Come back at like 5 pm Sydney time and this page will be ready for you to see!"

  const title = customTitle;
  const message = customMessage;

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-light-shade">
        <div className="mb-8 flex items-center justify-center flex-col gap-3">
            <h1 className="text-5xl font-bold text-dark-shade text-center">{title}</h1>
            <Image src="/animals/highlandCow.jpeg" alt="Under Construction" width={400} height={400} className='rounded-lg'/>
        </div>

        <p className="text-center text-xl text-dark-shade max-w-sm mx-auto">
            {message}
        </p>
    </div>
  );
};

export default UnderConstruction;
