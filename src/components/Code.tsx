"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type CodeProps = {
  code: string;
};

export const Code = (props: CodeProps) => {
  const { code } = props;

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {code}
    </SyntaxHighlighter>
  );
};
