import { useState } from "react";

import styles from "./Header.module.css";
import Search from "../Movies/Search";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <header>
        <ul className={styles.header}>
          <li>LOGO</li>
          <li>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </li>
          <li>LOG IN</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
