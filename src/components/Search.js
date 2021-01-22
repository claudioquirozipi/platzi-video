import React from "react";
import className from "classname";

import "../assets/styles/components/Search.scss";

const Search = (props) => {
  const { isHome } = props;

  const inputStyles = className("input", { isHome });

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={inputStyles} placeholder="Buscar..." />
    </section>
  );
};

export default Search;
