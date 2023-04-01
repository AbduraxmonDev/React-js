import React from "react";

function Page( {page}) {
  return (
    <div className="page">
      <h1>{page[1].id}</h1>
      <h1>{page[1].name}</h1>
    </div>
  );
}

export default Page;
