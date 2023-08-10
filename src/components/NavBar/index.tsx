import React from "react";
import styles from "./navBar.module.css";
import Button from "../Button";
import Link from "next/link";
import LINKS from "@/constants/LINKS";

const NavBar = () => {
  const { navContainer } = styles;
  return (
    <nav className={navContainer}>
      <div className="safe-area flex justify-end items-center">
        <Link href={LINKS.LOGIN}>
          <Button variant="whiteFilled">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
