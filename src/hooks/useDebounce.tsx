import { useCallback, useRef } from 'react';

export function useDebounce<T extends (...args: unknown[]) => void>({
  callback,
  delay,
}: {
  callback: T;
  delay: number;
}) {
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}
