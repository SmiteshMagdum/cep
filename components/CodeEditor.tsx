"use client";

import { useEffect, useRef, useState } from "react";

export default function CodeEditor({
  filename,
  defaultCode,
}: {
  filename: string;
  defaultCode: string;
}) {
  const [code, setCode] = useState(defaultCode);
  const [srcDoc, setSrcDoc] = useState(defaultCode);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setSrcDoc(defaultCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function run() {
    setSrcDoc(code);
  }

  return (
    <div className="overflow-hidden rounded-md border border-line bg-gray-2">
      <div className="flex items-center justify-between border-b border-line px-3.5 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-gray-1">
          {filename}
        </span>
        <button
          onClick={run}
          className="rounded-sm border border-line px-3.5 py-2 text-[13px] transition-colors hover:border-green-1 hover:text-green-1"
        >
          Run
        </button>
      </div>
      <textarea
        spellCheck={false}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="block min-h-[150px] w-full resize-y bg-background p-4 font-mono text-[13px] leading-relaxed text-foreground focus:outline-none"
      />
      <div className="px-3.5 pt-2.5 font-mono text-[10px] uppercase tracking-wider text-gray-1">
        Output
      </div>
      <iframe
        ref={iframeRef}
        title={filename}
        srcDoc={srcDoc}
        className="mx-3.5 mb-3.5 mt-2.5 h-[130px] w-[calc(100%-28px)] rounded-sm border-none bg-white-1"
      />
    </div>
  );
}
