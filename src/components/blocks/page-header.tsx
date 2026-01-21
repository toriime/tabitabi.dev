import React from "react";
import type { PageHeaderBlock } from "@/payload-types";

export default function PageHeaderBlock({ data }: { data: PageHeaderBlock }) {
  return (
    <div className="flex flex-col bottom-border-gradient mb-8">
      <div className="flex w-full justify-center text-4xl pb-4 whitespace-nowrap">
        Blog TabiTabi
      </div>
      <div className="flex w-full justify-center text-slate-300/80 text-lg pb-4 text-center">
        Tutaj znajdziesz wszystkie posty związane z naszymi projektami.
      </div>
    </div>
  );
}
