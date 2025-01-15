import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/mahfuz.jpeg"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
        unoptimized
        width={160}
        height={160}
        priority
      />

      <div>
        <h1 className="mb-1 text-3xl font-medium tracking-tight">
          Mohammad Mahfuzur Rahman
        </h1>
        <h4>International Geopolitics Enthusiast</h4>
      </div>

      <div className="prose prose-neutral dark:prose-invert text-justify">
        <p>
          I am Mahfuz, a political science graduate with a deep passion for
          exploring the dynamic and ever-evolving world of geopolitics. With a
          strong academic foundation and a commitment to scholarly excellence, I
          am actively seeking a Ph.D. opportunity at a globally renowned
          institution that has the capacity to take me to the highest of an
          eagle.
        </p>
        <p>
          My research interests span foreign policy actors, great power
          competition, peace and conflict, small state security, and
          environmental and digital politics.
        </p>
        <p>
          I have served as a teaching assistant, spearheaded social campaigns,
          and conducted research emphasizing data-driven approaches. My ultimate
          goal is to contribute impactful research that informs both academia
          and policy-making. I strive to inspire, learn, and lead in exploring
          the complex nature of global conflict.
        </p>
        <p>
          Beyond my academic pursuits, I find joy in exploring our mother earth
          by talking to nature, traveling with friends, capturing photos, and
          observing human behavior.
        </p>
      </div>

      {/* Higher Education */}
      <div className="mb-8 mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Higher Education</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            M.S.S. in Government and Politics
          </h3>
          <p className="text-lg font-normal">
            Jahangirnagar University, Savar, Bangladesh
          </p>
          <p className="text-lg font-normal">CGPA: Yet to publish</p>
          <p className="text-sm text-gray-600">05/2023 – 09/2024</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            B.S.S. in Government and Politics
          </h3>
          <p className="text-lg font-normal">
            Jahangirnagar University, Savar, Bangladesh
          </p>
          <p className="text-lg font-normal">CGPA: 3.58/4</p>
          <p className="text-sm text-gray-600">02/2018 – 03/2023</p>
        </div>
      </div>

      {/* Online Certificate Courses */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          Online Certificate Courses
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Step into Python for Data Science
          </h3>
          <p className="text-lg font-normal">developed by dataskool</p>
          <p className="text-sm text-gray-600">11/2023 – 05/2024</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Graduate Research Methodology Course
          </h3>
          <p className="text-lg font-normal">
            conducted by Youth Society for Research and Action (YSRA)
          </p>
          <p className="text-sm text-gray-600">08/2023 – 10/2023</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            The Politics of Policymaking
          </h3>
          <p className="text-lg font-normal">conducted by Youth Policy Forum</p>
          <p className="text-sm text-gray-600">12/2022 – 03/2023</p>
        </div>
      </div>
    </section>
  );
}
