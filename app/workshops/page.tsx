import { ImageGridLarge } from "app/components/image-grid-large";
import type { Metadata } from "next";
import Data from "../../public/data.json";

export const metadata: Metadata = {
  title: "Workshops",
  description: "Workshops",
};

export default function Workshops() {
  console.log(Data.WorkshopAndSeminar);

  return (
    <section>
      <ImageGridLarge
        images={Data.WorkshopAndSeminar.map((photo) => ({
          src: photo.Image,
          alt: photo.Description,
          Description: photo.Description,
          year: photo.Year.toString(),
        }))}
        columns={1}
      />
    </section>
  );
}
