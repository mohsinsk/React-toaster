import React, { useState, useCallback, useRef } from "react";
import ToasterComponent from "./ToaterComponent";

export default function useToasterHook() {
  const [tosaterDetails, setToasterDetails] = useState(null);
  let timerRef = useRef(0);

  const trigger = useCallback((details) => {
    clearTimeout(timerRef?.current);
    setToasterDetails(details);

    if (details.duration) {
      timerRef.current = setTimeout(() => {
        setToasterDetails(null);
      }, details.duration);
    }
  }, []);

  const Toaster = tosaterDetails ? (
    <ToasterComponent
      {...tosaterDetails}
      onClose={() => {
        setToasterDetails(null);
        tosaterDetails.onClose();
      }}
    />
  ) : null;

  return { Toaster, trigger };
}
