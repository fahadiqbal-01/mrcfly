import { useState, Suspense, lazy } from "react";
import Loading from "./Loading";

// Lazy load the preview component
const MarkdownPreview = lazy(() => import("../components/MarkdownPreview"));

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");

  return (
    <div style={{ padding: "1rem" }}>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        rows="6"
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <label style={{ display: "block", marginBottom: "1rem" }}>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </div>
  );
}
