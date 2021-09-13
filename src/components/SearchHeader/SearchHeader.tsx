import React, { useRef } from "react";
import styles from "./SearchHeader.module.css";

type searchHeader = {
  onSearch: (query: string) => void;
};

const SearchHeader = ({ onSearch }: searchHeader) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      const value = inputRef.current.value;
      console.log(value);
      onSearch(value);
    }
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
