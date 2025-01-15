"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageGridLargeProps {
  images: {
    src: string;
    alt: string;
    href?: string;
    Description: string;
    year: string;
  }[];
  columns?: 1 | 2 | 3 | 4; // Accepts 2, 3, or 4 columns
}

export const ImageGridLarge: React.FC<ImageGridLargeProps> = ({
  images,
  columns = 3,
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-6 my-8`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            {image.href ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={image.href}
                className="block w-full h-full"
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority
                  className="rounded-lg object-contain bg-gray-100"
                />
              </a>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
                className="rounded-lg object-contain bg-gray-100"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg hidden sm:block">
              <p className="text-base font-semibold text-justify">
                {image.Description}
              </p>
              <p className="text-sm font-bold">{image.year}</p>
            </div>
            <button
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 rounded-b-lg block sm:hidden"
              onClick={() => setSelectedImage(index)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-md mx-auto relative">
            <button
              className="absolute top-4 right-6 text-black border border-black pr-2 pl-2 rounded-full font-bold"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            <p className="text-base font-semibold text-justify text-black mt-8">
              {images[selectedImage!].Description}
            </p>
            <p className="text-sm font-bold text-grey-500 mt-2 text-black text-opacity-75 font-bold text-sm border-t border-grey-200 pt-2">
              {images[selectedImage!].year}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

// Example usage of the ImageGrid component
const images = [
  {
    src: "/photography/p1.jpg",
    alt: "The master and his disciple",
    Description:
      "The master and his disciple. This is a longer description to test the layout and ensure it looks good with more text.",
    year: "2018",
  },
  // Add more image objects here
];

const ExampleComponent = () => {
  return <ImageGridLarge images={images} columns={3} />;
};

export default ExampleComponent;
