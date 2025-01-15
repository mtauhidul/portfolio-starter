import Link from "next/link";
import { metaData } from "../config";
import { ThemeSwitch } from "./theme-switch";

const navItems = {
  "/academicEngagement": { name: "Academic" },
  "/workshops": { name: "Workshops" },
  "/cocurricular": { name: "Co-Curricular" },
  "/activities": { name: "Activism" },
  "/photography": { name: "Photography" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between max-w-4xl mx-auto px-6 md:px-0">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-3xl font-bold
          bg-gray-100 rounded-lg p-2
          dark:bg-gray-800 dark:text-gray-100
          transition-all hover:text-neutral-800 dark:hover:text-neutral-200
"
          >
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
