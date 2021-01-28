import React from "react";

function Home({ pokemon: results }) {
  return (
    <div>
      {results && results.map((poke, idx) => <div key={idx}>{poke.name}</div>)}
    </div>
  );
}

export default Home;
