import { useEffect, useState } from 'react';

export default function useDebounce(value: string, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState({ value, searchId: 0 });
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        const searchId = Math.floor(Math.random() * 10000);
        setDebouncedValue({ value, searchId });
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay], // Only re-call effect if value or delay changes
  );

  return [debouncedValue.value, debouncedValue.searchId] as const;
}
