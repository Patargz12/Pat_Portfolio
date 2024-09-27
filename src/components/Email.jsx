import React, { useEffect, useState } from "react";

const Toast = ({ showToast, setShowToast }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showToast) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setIsVisible(false);
      }, 5000); // Show toast for 5 seconds
      return () => clearTimeout(timer);
    }
  }, [showToast, setShowToast]);

  return isVisible && <div className="toast">Email sent successfully!</div>;
};

export default Toast;
