import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    id: 1,
    isActive: true,
    text: "RosaFlora",
    link: "/",
  },
  {
    id: 2,
    isActive: false,
    text: "Music",
    link: "/music",
  },
  {
    id: 3,
    isActive: false,
    text: "Shop",
    link: "/shop",
  },
  {
    id: 4,
    isActive: false,
    text: "About",
    link: "/about",
  },
];
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };
  const closeNavbar = () => {
    setOpenNavbar(false);
  };
  return (
    <>
      <div
        onClick={() => {
          closeNavbar();
        }}
        aria-hidden="true"
        className={`fixed bg-gray-800/40 inset-0 z-30 ${
          openNavbar ? "flex lg:hidden" : "hidden"
        }`}
      />
      <header className="sticky left-0 top-0 w-full flex items-center h-24 z-40">
        <nav className="container mx-auto px-8 sm:px-12 lg:px-16 flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold text-gray-800 dark:text-[#808000] mb-1">
              <Link to="/">RF</Link>
            </span>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation items */}
          <div
            className={`
      top-full absolute left-0 bg-white dark:bg-gray-950 dark:lg:bg-transparent
      lg:static lg:flex w-full ease-linear duration-300
      lg:w-auto lg:opacity-100 lg:visible
      ${
        openNavbar
          ? "visible opacity-100"
          : "invisible opacity-0 lg:visible lg:opacity-100"
      }
    `}
          >
            <div className="hidden md:flex items-center space-x-8 mb-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="text-lg font-medium text-[#483C32] hover:text-[#9DC183] dark:text-[#483C32] dark:hover:text-[#808000] transition duration-300"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Social media icons */}
          <div className="hidden md:flex items-center space-x-4 mb-1">
            <a
              href="https://www.facebook.com/profile.php?id=61561321138691"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#483C32] duration-200 ease-linear hover:text-[#9DC183] dark:text-[#483C32] dark:hover:text-[#808000]"
            >
              <span className="sr-only">facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rosaflora358/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#483C32] duration-200 ease-linear hover:text-[#9DC183] dark:text-[#483C32] dark:hover:text-[#808000]"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </a>
            <a
              href="https://x.com/RosaFlora358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#483C32] duration-200 ease-linear hover:text-[#9DC183] dark:text-[#483C32] dark:hover:text-[#808000]"
            >
              <span className="sr-only">X</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </a>
            {/* TikTok Icon */}
            <a
              href="https://www.tiktok.com/@rosaflora358"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#483C32] duration-200 ease-linear hover:text-[#9DC183] dark:text-[#483C32] dark:hover:text-[#808000]"
            >
              <span className="sr-only">TikTok</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
              </svg>
            </a>
            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com/channel/UCA9yz0dD9ma2YaENgukmriA/?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#483C32] duration-200 ease-linear hover:text-[#9DC183] dark:text-[#483C32] dark:hover:text-[#808000]"
            >
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
            {/* <a
              href="https://github.com/your-github-page"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-linear hover:text-gray-800 dark:hover:text-gray-100"
            >
              <span className="sr-only">github</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a> */}
          </div>
        </nav>
        {/* Mobile menu */}
        <AnimatePresence>
          {openNavbar && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-[#9DC183]  shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#483C32] hover:text-[#9DC183] hover:bg-gray-100 dark:text-[#483C32] dark:hover:text-[#9DC183] dark:hover:bg-[#483C32] transition duration-300"
                    onClick={() => setOpenNavbar(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
export default function HeroSection() {
  return (
    <>
      <Navbar />
      {/* <section className="py-8 ">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
                <div className="mx-auto text-center max-w-xl">
                    <h1 className="relative font-semibold max-w-max mx-auto pb-2 font-display text-3xl sm:text-4xl md:text-5xl text-gray-800 dark:text-white after:absolute
                        after:bottom-0 after:left-0 after:h-0.5 after:rounded-lg after:bg-gray-800 dark:after:bg-gray-100 after:w-4">
                        Roy Doe doe
                    </h1>
                </div>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-14 gap-y-8 md:items-end">
                    <div className="space-y-4 md:space-y-6 md:col-span-2 lg:col-span-1 w-full max-w-3xl lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                        <h1 className="font-display font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white">
                            Web designer based in Lubumbashi-DRC
                        </h1>
                        <div className="text-gray-700 dark:text-gray-300 space-y-3 mx-auto max-w-2xl lg:max-w-none">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <button className="px-6 h-11 flex items-center rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm transition ease-linear hover:bg-gray-900">Hire me</button>
                        </div>
                        <div className="grid grid-cols-3 w-full">
                            <div>
                                <h2 className="text-xl md:text-2xl font-display font-semiboldtext-gray-800 dark:text-gray-200">2years</h2>
                                <span className="text-gray-600">Experience</span>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-display font-semiboldtext-gray-800 dark:text-gray-200">+10</h2>
                                <span className="text-gray-600">Projects</span>
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-display font-semiboldtext-gray-800 dark:text-gray-200">90%</h2>
                                <span className="text-gray-600">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-full relative">
                            <span className="absolute inset-x-0 top-16 bottom-0 rounded-lg scale-[1.04]  bg-gradient-to-b from-gray-200 dark:from-gray-900" />
                            <span className="absolute inset-x-0 bottom-0 top-16 rounded-lg bg-gray-100 dark:bg-gray-900" />
                            <img src="/images/dev-with-c.webp" width={1240} height={1376} alt="Developer with laptop smile" className="relative w-full h-auto max-h-96 lg:max-h-[26rem]" />
                        </div>
                    </div>
                    <div className="space-y-3 lg:space-y-6">
                        <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4 bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                            <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-800  dark:text-gray-200 text-lg">Smart Skills</span>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                            <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                                </svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-800  dark:text-gray-200 text-lg">Smart Skills</span>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-x-2 p-2 md:p-3 lg:p-4  bg-gray-50 dark:bg-gray-900 border border-gray-100/80 dark:border-gray-900/80 rounded-lg">
                            <span className="min-w-max text-gray-600 p-2 md:p-3 rounded-lg bg-gray-200 dark:bg-gray-800 border border-gray-100/70 dark:border-gray-900/70 dark:text-gray-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={24} height={24} className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </span>
                            <div>
                                <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">Smart Skills</span>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  );
}
