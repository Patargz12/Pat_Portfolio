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
        <div className="p-20 px-10 mt-12 flex w-full flex-col items-center justify-center border-blue-gray-50 py-4 md:flex-row md:justify-center">
          <Typography
            variant="small"
            className="mb-4 text-center text-sm font-normal text-blue-gray-900 md:mb-0 p-8"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Patrick Arganza</a>. All
            rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
