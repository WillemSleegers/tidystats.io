import { ReactNode } from "react";

type AlertProps = {
  children: ReactNode;
};

export const Alert = (props: AlertProps) => {
  const { children } = props;

  return (
    <div
      className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <span className="block sm:inline">{children}</span>
    </div>
  );
};
