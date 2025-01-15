import { ImageGrid } from "app/components/image-grid";
import type { Metadata } from "next";
import Data from "../../public/data.json";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography",
};

export default function Photography() {
  console.log(Data.Photography);

  return (
    <section>
      <ImageGrid
        images={Data.Photography.map((photo) => ({
          src: photo.Image,
          alt: photo.Description,
          Description: photo.Description,
          year: photo.Year.toString(),
        }))}
        columns={2}
      />
    </section>
  );
}
