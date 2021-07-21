import { useState, useEffect, useRef, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby"

// Hooks
const useElementInView = (ref, rootMargin = "0px") => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (!ref) {
      console.log('NO REF');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref && ref.current) {
      observer.observe(ref && ref.current);
    }
    return () => {
      observer.unobserve(ref && ref.current);
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

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }
    `
  )
  return site.siteMetadata
}

export {
  useElementInView,
  useIsMounted,
  useSiteMetadata
}
