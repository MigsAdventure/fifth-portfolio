import React, { useRef, useState } from "react";
import {animated as a, useTransition, useSpring, useTrail} from "react-spring";
import {elementInView} from "../../utils/hooks";

const SpringSlide = ({children, ...props}) => {
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
  if(props.reAnimate) {
    // items = props.reAnimate && !onScreen ? React.Children.toArray(children) : []
    if (!onScreen && list.length >= 1) {
      !onScreen && console.log('remove was triggered')
      !onScreen && setList(list => list.filter((x, i) => i < list.length - 1));
      // !onScreen && (items = []);
    } else {
      list.length < 1 && onScreen && setList(React.Children.toArray(children));
    }
  }
  
  const transition = useTransition(list, {
    config: { mass: 1000, tension: 500, friction: 1200, duration: props.duration || 500 },
    delay: 200,
  from: {
      opacity: 0,
      transform: (() => {
        // slide direction based on prop or defaults to slide right if no prop present
        switch (props.direction) {
          case "up": {
            return 'translate3d(0, -100%, 0px)';
          }
          case "right": {
            return 'translate3d(-100%, 0px, 0px)';
          }
          case "down": {
            return 'translate3d(0, 100%, 0px)';
          }
          case "left": {
            return 'translate3d(100%, 0px, 0px)';
          }
          default: return 'translate3d(-100%, 0px, 0px)';
        }
      })(),
    },
    enter: { opacity: 1, transform: "translate3d(0%, 0px, 0px)" },
    leave: {
      opacity: 0,
      transform: (() => {
        // slide direction based on prop or defaults to slide right if no prop present
        switch (props.direction) {
          case "up": {
            return 'translate3d(0, -100%, 0px)';
          }
          case "right": {
            return 'translate3d(-100%, 0px, 0px)';
          }
          case "down": {
            return 'translate3d(0, 100%, 0px)';
          }
          case "left": {
            return 'translate3d(100%, 0px, 0px)';
          }
          default: return 'translate3d(-100%, 0px, 0px)';
        }
      })(),
    },
    keys: list.map((item, index) => index)
  });
  return (
    <div ref={ref}>
      {transition((styles, item) => (
        <a.div
          className="trails-animation"
          style={styles}
        >
          {item}
        </a.div>
      ))}
    </div>
  )
}

export default SpringSlide;

