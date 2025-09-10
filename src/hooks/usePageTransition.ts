import { useState, useCallback } from "react";

export const usePageTransition = () => {
  const [isExiting, setIsExiting] = useState(false);

  const startExit = useCallback(() => {
    setIsExiting(true);
  }, []);

  const resetExit = useCallback(() => {
    setIsExiting(false);
  }, []);

  return {
    isExiting,
    startExit,
    resetExit,
  };
}; 