import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function Error({ children }: Props) {
  return (
    <div>{`${
      children ? children : "Oops! There was an error! Please try again later!"
    }`}</div>
  );
}

export default Error;
