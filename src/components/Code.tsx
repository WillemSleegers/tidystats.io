"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeProps = {
  code: string;
};

export const Code = (props: CodeProps) => {
  const { code } = props;

  return (
    <SyntaxHighlighter
      language="r"
      style={xcode}
      customStyle={{
        background: "rgb(249, 250, 251)",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};
