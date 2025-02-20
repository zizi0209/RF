import React from "react";
import {miniImages} from "../../../../assets/images";

export default function App() {
  return (
    <footer className=" text-center text-white bg-[#808000] dark:text-neutral-200">
      <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {miniImages.map((img, index) => {
            return (
              <div key={index} className="mb-6 lg:mb-0 flex justify-center items-center w-full max-w-[250px]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-md shadow-lg object-cover"
                />
              </div>
            );
          })}
          
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-[#483C32] p-4 text-center text-neutral-700  dark:text-neutral-200">
        © 2023 Copyright:{' '}
        <a 
          className="text-neutral-800 dark:text-neutral-400 hover:underline" 
          href="https://rosaflora.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          RosaFlora
        </a>
      </div>
    </footer>
  );
}
