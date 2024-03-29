import { ReactNode } from "react";

type SectionProps = {
  gray?: boolean;
  children: ReactNode;
};

export const Section = (props: SectionProps) => {
  const { gray, children } = props;

  return (
    <section className={`${gray ? "bg-gray-50" : ""}`}>
      <div className="mx-auto max-w-screen-lg px-4 py-12 md:py-14 lg:px-6 lg:py-16">
        {children}
      </div>
    </section>
  );
};
