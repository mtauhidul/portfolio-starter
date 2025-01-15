export default function Education() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">Education</h1>
      </div>

      {/* Higher Education */}
      <div className="mb-8">
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
