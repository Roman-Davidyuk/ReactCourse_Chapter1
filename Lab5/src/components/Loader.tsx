import React from "react";

interface LoaderProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ isLoading, children }) => {
  return isLoading ? <div className="spinner"></div> : <>{children}</>;
};

export default Loader;
