import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2500) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text) => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), timeout);
          return true;
        }
      } catch {
        // Clipboard permission denied or unsupported
      }
      return false;
    },
    [timeout]
  );

  return { copied, copy };
}
