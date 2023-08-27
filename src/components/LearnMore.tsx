type LearnMoreProps = {
  href: string;
  text: string;
};

export const LearnMore = (props: LearnMoreProps) => {
  const { href, text } = props;

  return (
    <a
      className="mt-3 inline-block rounded bg-test px-3 py-1 text-sm font-semibold text-white hover:bg-slate-700 lg:text-base xl:text-lg"
      href={href}
    >
      {text}
    </a>
  );
};
