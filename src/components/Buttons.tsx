type ButtonProps = {
  text: string;
};

export const Button = (props: ButtonProps) => {
  const { text } = props;

  return (
    <button
      className="bg-light-blue hover:bg-light-blue-hover mb-1.5 inline-block rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      role="button"
    >
      {text}
    </button>
  );
};
