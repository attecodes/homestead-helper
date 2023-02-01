import { YoutubeIcon } from "components/Icons/YoutubeIcon";
import { InstagramIcon } from "components/Icons/InstagramIcon";

const Footer = () => {
  return (
    <footer className=" bg-red-500 py-2">
      <div className="px-4 lg:px-0 container mx-auto flex justify-between items-center gap-8">
        <div className="text-white text-sm">Copyright 2023 -- Paris, Texas</div>
        <div className="flex items-center gap-4">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com"
            className="hover:opacity-75"
          >
            <YoutubeIcon className="fill-white h-6 w-6" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/homesteadhelper/"
            className="hover:opacity-75"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
