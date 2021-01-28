import React from "react";
import { Link } from "react-router-dom";

function Home({ pokemon: results }) {
  return (
    <div className="mt-10 p-4 flex flex-wrap">
      {results &&
        results.map((poke, idx) => (
          <div className="ml-4 text-2xl text-blue-400">
            <Link to={`/about/${poke.idx}`} className="" key={idx}>
              {poke.name}
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
