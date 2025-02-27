import { useEffect, useRef } from "react";

export function useHandleOutside(close, listCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      };
      document.addEventListener("click", handleClick, true);
      return () => document.removeEventListener("click", handleClick);
    },
    [close, listCapturing]
  );
  return ref;
}
