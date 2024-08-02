"use client";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading flex justify-center items-start h-screen">
      <ClipLoader
        color={`#101010`}
        loading={loading}
        size={25}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
