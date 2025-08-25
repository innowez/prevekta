import { useState, useEffect } from 'react';

interface UseMediaQueryOptions {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
}

const useMediaQuery = (
  query: string, 
  options: UseMediaQueryOptions = {}
): boolean => {
  const { defaultValue = false, initializeWithValue = true } = options;
  const [matches, setMatches] = useState<boolean>(
    initializeWithValue ? defaultValue : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
};

export default useMediaQuery;
