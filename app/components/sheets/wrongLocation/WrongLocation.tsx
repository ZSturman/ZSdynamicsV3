import Image from "next/image";
import React from "react";
import Link from "next/link";

const WrongLocation = () => {
  return (
    <div className="w-full flex items-center justify-center py-5">
      <div className="h-96 flex flex-col md:flex-row gap-5 p-5 rounded-xl backdrop-blur-sm items-center">

      
      
        <div className="rounded-xl relative w-auto h-auto p-8">
        <Image src="/animals/highlandCow.jpeg" alt="Quokka" width={200} height={200} className="rounded-xl visible sm:invisible"/>
          <Image src="/animals/quokka.jpeg" alt="Quokka" fill className="rounded-xl"/>
        </div>

        <div className="flex flex-col h-full items-left justify-center">
          <h2 className="mt-6 text-3xl font-semibold">Oops!</h2>
          <p className="mt-2">Looks like this page doesn&apos;t exist.</p>

          <div className="mt-6">
            <Link
              href="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Go Home
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WrongLocation;
