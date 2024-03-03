import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer items-center p-2 bg-neutral text-neutral-content bottom-0 fixed sticky">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          className="text-white"
          href={"https://github.com/kocharalampidis"}
          target="_blank"
        >
          {/* <BsGithub size="25px" /> */}
        </Link>
        <Link
          className="text-white"
          href={
            "https://www.linkedin.com/in/konstantinos-charalampidis-45b6ba1b3/"
          }
          target="_blank"
        >
          {/* <BsLinkedin size="25px" /> */}
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
