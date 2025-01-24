import { useRecoilValue, useSetRecoilState } from "recoil";
import React from "react";
import { isDarkAtom } from "../routes/atoms.ts";
import { Link } from "react-router-dom";

function Header() {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return (
    <header>
      <ul>
        <li>
          <button onClick={toggleDarkAtom}>
            {isDark ? "light" : "dark"} Mode
          </button>
        </li>
        <li>
          <Link to={"/"}>&larr; Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
