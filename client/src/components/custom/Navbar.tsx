import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { appContext } from "@/App";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links = [
  { name: "Buy", path: "/allcars" },
  { name: "Sell", path: "/sellcar" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

{
  /* mobile navigation links  */
}
const NavMobileLinks = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <div className="flex flex-col gap-4 items-start">
      {isLogged ? (
        <Link to={"#"} className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="../src/assets/logo.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          My Account
        </Link>
      ) : null}
      {links.map((link) => (
        <Button variant={"link"} key={link.name}>
          <Link to={link.path}>{link.name}</Link>
        </Button>
      ))}
    </div>
  );
};

const Navbar = () => {
  const { isLogged } = useContext(appContext);
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <nav className="flex justify-between bg-zinc-100 py-3 px-8 items-center shadow-sm">
      <section className="flex items-center gap-4">
        <FaBars
          className="block sm:hidden cursor-pointer"
          onClick={() => setMenu(true)}
        />
        <Link to={"/"} className="text-2xl font-bold">
          <div>logo</div>
        </Link>
      </section>

      {/* links for pc view */}
      <div className="hidden sm:flex gap-10">
        <ul className="flex items-center gap-2">
          {links.map((link) => (
            <Button variant={"link"} key={link.name}>
              <Link
                to={link.path}
                className="text-zinc-500 hover:text-zinc-950"
              >
                {link.name}
              </Link>
            </Button>
          ))}
        </ul>
        <ul className="flex items-center gap-2">
          {!isLogged ? (
            <>
              <Button>
                <Link to={"#"}>Register</Link>
              </Button>
              <Button>
                <Link to={"#"}>Login</Link>
              </Button>
            </>
          ) : null}
          {/* avatar dropdown menu */}
          {isLogged ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Link to={"#"}>
                  <Avatar>
                    <AvatarImage src="../src/assets/logo.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* account details */}
                <DropdownMenuItem>
                  <Link to={"#"}>My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {/* logout */}
                  <Button variant={"destructive"} className="cursor-pointer">
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </ul>
      </div>

      {/* sidebar */}
      <div
        className={clsx(
          " fixed h-full w-screen sm:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all",
          isSideMenuOpen && "translate-x-0"
        )}
      >
        <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-3 z-50 w-56 flex ">
          <AiOutlineCloseCircle
            onClick={() => setMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />

          <NavMobileLinks isLogged={isLogged} />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
