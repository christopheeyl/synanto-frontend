import { FunctionComponent, useState } from "react";

interface IProps {
  isLoggedin: boolean;
  logUser?: () => void;
}

interface DDMItem {
  label: string;
  link?: string;
}

const navItemsUserLogout: DDMItem[] = [
  {
    label: "Home",
    link: "",
  },
  {
    label: "How does it work?",
    link: "",
  },
  {
    label: "How does it cost?",
    link: "",
  },
  {
    label: "Product",
    link: "",
  },
];

const navItemsUserLogin: DDMItem[] = [
  {
    label: "Chat",
    link: "/chat",
  },
  {
    label: "Calendar",
    link: "/calendar",
  },
  {
    label: "Events",
    link: "/events",
  },
  {
    label: "Contacts",
    link: "/contacts",
  },
];

const Navbar: FunctionComponent<IProps> = ({ isLoggedin, logUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = isLoggedin ? navItemsUserLogin : navItemsUserLogout;

  return (
    <>
      <div className="sticky z-50 top-0 w-full bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img src="/images/logo.svg" alt="easybank logo" />
          </div>

          <div className="hidden lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem, id) => (
              <a
                className="mx-3 py-5 hover:gradient-border-bottom"
                key={id}
                href={navItem.link}
              >
                {navItem.label}
              </a>
            ))}
          </div>

          <button
            onClick={logUser}
            className="hidden lg:block bg-primary-lime-green px-7 py-3 rounded-full text-neutral-white text-xs bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400"
          >
            Login
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && "hidden"}`}
              src="/icons/icon-hamburger.svg"
              alt=""
            />
            <img
              className={isOpen ? "block" : "hidden"}
              src="/icons/icon-close.svg"
              alt=""
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem, id) => (
            <a key={id} className="py-2" href="#">
              {navItem.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
