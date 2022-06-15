import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  let filterTimeout;

  const onDebounce = (query) => {
    clearTimeout(filterTimeout);
    if (!query) return updatePageNumber(1);
    filterTimeout = setTimeout(() => {
      console.log("Debounce ====> ", query);
      updatePageNumber(1);
      setSearch(query);
    }, 500);
  };

  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          onDebounce(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
    </form>
  );
};

export default Search;
