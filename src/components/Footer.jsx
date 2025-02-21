import { Typography } from "@material-tailwind/react";
import Socials from "./Socials";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="p-20 px-10 py-10 mt-12 flex w-full flex-col items-center justify-centers border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center text-sm font-normal text-blue-gray-900 md:mb-0 p-8"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Patrick Arganza</a>. All
            rights Reserved
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
