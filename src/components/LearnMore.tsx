type LearnMoreProps = {
  href: string;
  text: string;
};

export const LearnMore = (props: LearnMoreProps) => {
  const { href, text } = props;

  return (
    <a
      className="mt-3 inline-block py-1 text-sm font-semibold underline underline-offset-4 lg:text-base xl:text-lg"
      href={href}
    >
      {text}
    </a>
  );
};
