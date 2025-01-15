import { ImageGridLarge } from "app/components/image-grid-large";
import type { Metadata } from "next";
import Data from "../../public/data.json";

export const metadata: Metadata = {
  title: "Academic Engagement",
  description: "Academic Engagement",
};

export default function AcademicEngagement() {
  console.log(Data.AcademicEngagement);

  return (
    <section>
      <ImageGridLarge
        images={Data.AcademicEngagement.map((photo) => ({
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
