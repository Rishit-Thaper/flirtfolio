import React from "react";
import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <Hearts
        height="80"
        width="80"
        color="#CA65B0"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
