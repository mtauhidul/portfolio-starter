import Image from "next/image";
import React from "react";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
    Description: string;
    year: string;
  }[];
  columns?: 1 | 2 | 3 | 4; // Accepts 2, 3, or 4 columns
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-4 my-8`}>
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
                  className="rounded-lg object-cover"
                />
              </a>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
                className="rounded-lg object-cover"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
              <p className="text-sm">{image.Description}</p>
              <p className="text-xs">{image.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Example usage of the ImageGrid component
const images = [
  {
    src: "/photography/p1.jpg",
    alt: "The master and his disciple",
    Description: "The master and his disciple.",
    year: "2018",
  },
  // Add more image objects here
];

const ExampleComponent = () => {
  return <ImageGrid images={images} columns={3} />;
};

export default ExampleComponent;
