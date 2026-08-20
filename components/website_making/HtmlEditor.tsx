"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";

interface HtmlEditorProps {
  initialCode: string;
}

export default function HtmlEditor({
  initialCode,
}: HtmlEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState(initialCode);

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div className="mt-6">
      {/* Editor */}
      <div className="overflow-hidden rounded-lg border border-line">
        <Editor
          height="250px"
          language="html"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value ?? "")}
          options={{
            minimap: {
              enabled: false,
            },
            fontSize: 14,
            padding: {
              top: 12,
            },
            automaticLayout: true,
          }}
        />
      </div>

      <button
        onClick={runCode}
        className="mt-3 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
      >
        Run
      </button>

      <div className="mt-4">
        <h3 className="mb-2 text-sm font-medium">
          Output
        </h3>

        <div className="min-h-[100px] rounded-lg border border-line bg-white p-4 text-black">
          <iframe
            title="HTML Output"
            srcDoc={output}
            className="h-[200px] w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}