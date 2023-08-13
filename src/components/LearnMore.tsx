type LearnMoreProps = {
  href: string;
  text: string;
};

export const LearnMore = (props: LearnMoreProps) => {
  const { href, text } = props;

  return (
    <a
      className="rounded bg-test px-3 py-2 text-sm font-semibold text-white lg:text-base xl:text-lg"
      href={href}
    >
      {text}
    </a>
  );
};
