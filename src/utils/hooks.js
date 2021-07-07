import { useState, useEffect, useRef, useCallback } from "react";
// Hooks
const elementInView = (ref, rootMargin = "0px") => {
  if (!ref) {
    console.log('NO REF');
    return;
  }
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
      console.log('UNOUNTING');
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
};

const useIsMounted = (ref) => {
  useEffect(() => {
    if (ref && ref.current) {
    console.log('MOUNTED')
  } else {
    console.log('UNMOUNTED')
  }
  }, [])
}

export {
  elementInView,
  useIsMounted
}
