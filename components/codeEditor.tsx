"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function Playground() {
  const [code, setCode] = useState(`
<h1>Hello World</h1>
<p>My first website!</p>
`);

  const [output, setOutput] = useState(code);

  return (
    <div className="grid grid-cols-2 gap-4">

      {/* Editor */}
      <div>
        <Editor
          height="500px"
          defaultLanguage="html"
          value={code}
          onChange={(value) => setCode(value ?? "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 16,
            automaticLayout: true,
          }}
        />

        <button
          onClick={() => setOutput(code)}
          className="mt-3 rounded-lg bg-black px-4 py-2 text-white"
        >
          Run Code
        </button>
      </div>

      {/* Preview */}
      <iframe
        srcDoc={output}
        className="h-[500px] w-full rounded-lg border"
        sandbox=""
        title="preview"
      />

    </div>
  );
}