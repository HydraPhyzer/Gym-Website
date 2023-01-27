import { useState, useEffect } from "react";

const useMediaQueries = (Query: string) => {
  const [Matches, SetMatches] = useState(false);
  useEffect(() => {
    const Media = window.matchMedia(Query);
    if (Media.matches !== Matches) {
      SetMatches(Media.matches);
    }

    const Listener = () => SetMatches(Media.matches);
    window.addEventListener("resize", Listener);
    return () => window.removeEventListener("resize", Listener);
  }, [Matches, Query]);
  return Matches;
};

export default useMediaQueries;
