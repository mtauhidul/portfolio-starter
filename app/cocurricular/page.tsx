import { ImageGridLarge } from "app/components/image-grid-large";
import type { Metadata } from "next";
import Data from "../../public/data.json";

export const metadata: Metadata = {
  title: "Co-Curricular",
  description: "Co-Curricular",
};

export default function CoCurricular() {
  console.log(Data.CoCurricular);

  return (
    <section>
      <ImageGridLarge
        images={Data.CoCurricular.map((photo) => ({
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
