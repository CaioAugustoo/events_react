import React from 'react';
import { PreLoader, Spinner } from "./style";

const Loader = () => {
  return (
    <PreLoader>
      <Spinner></Spinner>
    </PreLoader>
  );
};

export default Loader;
