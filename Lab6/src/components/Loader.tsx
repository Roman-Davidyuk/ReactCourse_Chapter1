import { FC, ReactNode } from "react";

interface LoadingProps {
  loading: boolean;
  children?: ReactNode;
}

function Spinner() {
  return <div className="spinner"></div>;
}

const Loader: FC<LoadingProps> = ({ loading, children }) => {
  return (
    <div className="loading-container mt-4">
      {loading && <Spinner />}
      {children}
    </div>
  );
};

export default Loader;
