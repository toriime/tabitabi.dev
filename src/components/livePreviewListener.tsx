"use client";
import { getClientSideURL } from "@/lib/utils";
import { RefreshRouteOnSave as PayloadLivePreview } from "@payloadcms/live-preview-react";
import { useRouter } from "next/navigation";
import React from "react";

export const LivePreviewListener: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <PayloadLivePreview
        refresh={() => router.refresh()}
        serverURL={getClientSideURL()}
      />
      <div className="fixed bottom-2 left-2 z-50 flex flex-col justify-center rounded-xl bg-slate-900 p-2 shadow-md gap-3">
        <div className="text-md text-gray-500">You are in draft mode</div>
        <button
          onClick={async () => {
            const res = await fetch("/api/draft/exit");
            if (res.ok) {
              router.refresh();
            }
          }}
          className="rounded-md bg-slate-500 px-4 py-2 text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          Exit Draft Mode
        </button>
      </div>
    </>
  );
};
