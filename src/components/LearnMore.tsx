type LearnMoreProps = {
  href: string;
  text: string;
};

export const LearnMore = (props: LearnMoreProps) => {
  const { href, text } = props;

  return (
    <a
      className="hover:text-primary-800 mt-3 inline-flex items-center font-medium text-blue-600"
      href={href}
    >
      {text}
    </a>
  );
};
