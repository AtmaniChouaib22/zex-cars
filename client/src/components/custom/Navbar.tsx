import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { logout } from "@/lib/fetchUtils";

const links = [
  { name: "Buy", path: "/buycar" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const adminLinks = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Pending Cars", path: "/admin/pendingcars" },
  { name: "Unconfirmed Deals", path: "/admin/unconfirmeddeals" },
];

{
  /* mobile navigation links  */
}
const NavMobileLinks = ({
  isLogged,
  user,
}: {
  isLogged: boolean;
  user: object;
}) => {
  return (
    <div className="flex  bg-transparent bg-black flex-col gap-4 items-start">
      {isLogged && !user.admin ? (
        <>
          <Link to={"/profile"} className="flex items-center gap-1">
            <Avatar>
              <AvatarImage src={`../uploads/avatars/${user.avatar}`} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            My Profile
          </Link>
          <Button variant={"link"} key={"sellcar"}>
            <Link to={"/sellcar"} className="text-zinc-950">
              Sell
            </Link>
          </Button>
        </>
      ) : (
        <Button
          size={"sm"}
          className="bg-zinc-800 text-white hover:bg-zinc-900"
        >
          <Link to={"/login"}>Login</Link>
        </Button>
      )}
      {/* admin links */}
      {isLogged && user.admin ? (
        <>
          {adminLinks.map((link) => (
            <Button variant={"link"} key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </Button>
          ))}
        </>
      ) : null}
      {!isLogged && (
        <>
          {links.map((link) => (
            <Button variant={"link"} key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </Button>
          ))}
        </>
      )}
      {isLogged && !user.admin && (
        <>
          {links.map((link) => (
            <Button variant={"link"} key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

{
  /* Navbar component */
}
const Navbar = () => {
  const naviagte = useNavigate();
  const { isLogged, setIsLogged, user, isLoading, setIsLoading, setUser } =
    useContext(appContext);
  const [isSideMenuOpen, setMenu] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      setIsLogged(false);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        avatar: "",
        admin: false,
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
    setIsLoading(false);
    naviagte("/login");
  };

  return (
    <nav className="flex bg-black justify-between text-zinc-100 py-3 px-6 items-center shadow-sm">
      <section className="flex items-center gap-4">
        <FaBars
          className="block sm:hidden cursor-pointer"
          onClick={() => setMenu(true)}
        />
        <Link to={"/"} className="text-2xl font-bold">
          <div>ZEXCARS</div>
        </Link>
      </section>

      {/* login and register for mobile view */}
      {!isLogged ? (
        <div className="sm:hidden flex gap-1 items-center">
          <Button
            size={"sm"}
            className="bg-zinc-800 text-white hover:bg-zinc-900"
          >
            <Link
              to={"/register"}
              className="bg-zinc-800 text-white hover:bg-zinc-900"
            >
              Register
            </Link>
          </Button>
        </div>
      ) : null}

      {/* links for pc view */}
      <div className="hidden sm:flex gap-10">
        <ul className="flex items-center gap-2">
          {/** normal user links */}
          {isLogged && !user.admin && (
            <>
              <Button variant={"link"} key={"sellcar"}>
                <Link
                  to={"/sellcar"}
                  className="text-zinc-500 hover:text-white"
                >
                  Sell
                </Link>
              </Button>
              {links.map((link) => (
                <Button variant={"link"} key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-500 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </Button>
              ))}
            </>
          )}
          {/** admin links */}
          {isLogged && user.admin ? (
            <>
              {adminLinks.map((link) => (
                <Button variant={"link"} key={link.name}>
                  <Link
                    to={link.path}
                    className="text-zinc-500 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </Button>
              ))}
            </>
          ) : null}
        </ul>
        <ul className="flex items-center gap-2">
          {!isLogged ? (
            <>
              <Button variant={"link"}>
                <Link to={"/buycar"} className="text-zinc-500 hover:text-white">
                  Buy
                </Link>
              </Button>
              <Button variant={"link"}>
                <Link
                  to={"/contact"}
                  className="text-zinc-500 hover:text-white"
                >
                  Contact
                </Link>
              </Button>
              <Button variant={"link"}>
                <Link to={"/about"} className="text-zinc-500 hover:text-white">
                  About
                </Link>
              </Button>
              <Button className="bg-zinc-800 text-white hover:bg-zinc-900">
                <Link to={"/register"}>Register</Link>
              </Button>
              <Button className="bg-zinc-800 text-white hover:bg-zinc-900">
                <Link to={"/login"}>Login</Link>
              </Button>
            </>
          ) : null}
          {/* avatar dropdown menu */}
          {isLogged ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Link to={"#"}>
                  <Avatar>
                    <AvatarImage src={`../uploads/avatars/${user.avatar}`} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* account details */}
                <DropdownMenuItem>
                  <Link to={"/profile"}>My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {/* logout */}
                  <Button
                    variant={"destructive"}
                    className="cursor-pointer"
                    onClick={handleLogout}
                  >
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
          "z-50 fixed h-full w-screen sm:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all",
          isSideMenuOpen && "translate-x-0"
        )}
      >
        <section className="text-black bg-white absolute left-0 top-0 h-screen p-8 gap-3 z-50 w-56 ">
          <AiOutlineCloseCircle
            onClick={() => setMenu(false)}
            className="mt-0 mb-8 text-3xl cursor-pointer"
          />

          <NavMobileLinks isLogged={isLogged} user={user} />
          {isLogged && (
            <Button
              variant={"destructive"}
              className="cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
