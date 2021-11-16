import React from "react";

function Loading() {
  return (
    <React.Fragment>
    
      <div className="spinner-grow text-danger loading" role="status">
      <h1>Loading..</h1>
        <span className="sr-only">Loading...</span>
      </div>
    </React.Fragment>
  );
}

export default Loading;
