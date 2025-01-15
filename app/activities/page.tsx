import { ImageGridLarge } from "app/components/image-grid-large";
import type { Metadata } from "next";
import Data from "../../public/data.json";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Activities() {
  console.log(Data.Activism);

  return (
    <section>
      <ImageGridLarge
        images={Data.Activism.map((photo) => ({
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
