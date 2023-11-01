import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MaxWidthWrapper = ({ children }: Props) => {
  return (
    <div
      className={cn(
        `mx-auto w-full max-w-screen-xl flex flex-col items-center justify-center`
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
