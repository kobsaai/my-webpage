import type { HTMLProps } from "react";

function BasicBody({ children }: HTMLProps<HTMLParagraphElement>) {
  return (
    <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
      {children}
    </p>
  );
}

export default BasicBody;
