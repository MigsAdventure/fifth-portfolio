import React, { useRef, useState, useEffect, useMemo } from "react";
import {elementInView, useIsMounted} from "../../utils/hooks";
import gsap from "gsap";
import { generateRandomColor } from "../../utils/general";

const GsapStagger = ({children, ...props}) => {
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);
  const divRef = useRef(0);
  const [play, setPlay] = useState(true);
  const [items, setItems] = useState(props.items['slide1']);
  const [keyCount, setKeyCount] = useState(1);
  
  useEffect(() => {
      timeline.from(divRef.current.childNodes, {
        x: 100,
        opacity: 0,
        ease: "power4.inOut",
        duration: 2,
        stagger: 0.1
      });
  }, []);
  
  useEffect(() => {
    // clean up controller
      if (play) {
        timeline.play();
        setTimeout(() => {
          //prevent setting state when unmounted
          if (divRef.current) {
            keyCount === Object.keys(props.items).length
              ? setKeyCount(1)
              : setKeyCount(keyCount + 1);
            setPlay(false);
          }
        }, 3500);
      } else {
        timeline.reverse();
        setTimeout(() => {
          //prevent setting state when unmounted
          if (divRef.current) {
            setItems(props.items[`slide${keyCount}`]);
            setPlay(true);
          }
        }, 2500);
    }
  }, [play]);
  return (
    <div>
      <div className="animation-container">
        <div ref={divRef} className="items">
          {items.map((e, i) => (
            <div key={i} className="item" style={{backgroundColor: generateRandomColor()}}>
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GsapStagger;

