// Splits a paragraph string into individual sentences (split on
// "." or "?" or "!" followed by whitespace) and renders each on its
// own line with vertical spacing — improves on-page readability for
// long-form Korean copy where users prefer visual separation between
// sentences.

export function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

export function Prose({
  text,
  className = "",
  spacing = "mt-2",
}: {
  text: string;
  className?: string;
  spacing?: string;
}) {
  const sentences = splitSentences(text);
  if (sentences.length <= 1) {
    return <p className={className}>{text}</p>;
  }
  return (
    <div className={className}>
      {sentences.map((s, i) => (
        <p key={i} className={i > 0 ? spacing : undefined}>
          {s}
        </p>
      ))}
    </div>
  );
}
