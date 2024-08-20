// Navbar.server.js
import { currentUser } from "@clerk/nextjs/server";
import NavbarClient from './navbar';

const Navbar = async () => {
  const user = await currentUser();

  return <NavbarClient user={user} />;
};

export default Navbar;
