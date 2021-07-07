import React, { useRef, useState, useEffect, useMemo } from "react";
import {elementInView} from "../../utils/hooks";
import gsap from "gsap";
import { generateRandomColor } from "../../utils/general";

const GsapStagger = ({children, ...props}) => {
  // Ref for the element that we want to detect whether on screen
  const [list, setList] = useState([]);
  
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 200px of element is visible.
  const onScreen = elementInView(((props.trackScreen && ref) || null), props.animateMargin || "-200px");
  // let items = [];
  // items.length < 1 && onScreen && (items=React.Children.toArray(children));
  if (onScreen) {
    !props.reAnimate && list.length < 1 && onScreen && setList(React.Children.toArray(children));
  }
  
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
    if (play) {
      console.log("playing started");
      timeline.play();
      setTimeout(() => {
        keyCount === Object.keys(props.items).length
          ? setKeyCount(1)
          : setKeyCount(keyCount + 1);
        setPlay(false);
      }, 3500);
    } else {
      console.log("playing is false");
      timeline.reverse();
      
      setTimeout(() => {
        setItems(props.items[`slide${keyCount}`]);
        setPlay(true);
      }, 2500);
    }
  }, [play]);
  return (
    <div ref={ref}>
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

