import React, { useRef, useEffect, useState } from "react";
import {animated as a, useTrail, useSpring} from "react-spring";
import {useElementInView} from "../../utils/hooks";

const SpringScale = ({children, ...props}) => {
  // Ref for the element that we want to detect whether on screen
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 200px of element is visible.
  
  const onScreen = useElementInView(((props.trackScreen && ref) || null), props.animateMargin || "-200px");
  const items = React.Children.toArray(children);
  const trail = useTrail(children.length || 1, {
    config: { mass: 1000, tension: 2000, friction: 2000, duration: props.duration || 2000 },
    scale: props.scale && props.scale.end || 1,
    height: 100,
    x: 0,
    opacity: 1,
    filter: props.blur ? `blur(${props.blur.end})` : 'none',
    reverse: props.reAnimate && !onScreen,
    from: {opacity: props.opacity && props.opacity.start || 0, x: 0, height: 90, scale: props.scale && props.scale.start || 0, filter: (props.blur ? `blur(${props.blur.start})`: 'none')  },
    enter: {opacity: (props.reAnimate && onScreen ? 1 : 0) || 1},
    leave: {opacity: 0},
    onRest: () => {
      props.changeElOnEnd && console.log('ENTER REST MODE!!!');
      props.changeElOnEnd && setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  });
  
  const [loaded, setLoaded] = useState(false);
  const [finalTransition, setFinalTransition] = useState(false);
  
  useEffect(() => {
    props.changeElOnEnd && loaded && setTimeout(() => {
      setFinalTransition(true);
    }, 800)
  },[loaded])
  
  return (
    props.changeElOnEnd && loaded ?
      finalTransition && props.finalTransition ?
        <div
          className={props.classNames ? `${props.classNames} final-transition` : 'final-transition'}
          style={{
            ...props.finalTransition
          }}
        />
        :
        <div className={props.classNames? props.classNames : ''}/>
      :
      <div ref={ref}>
        {trail.map(({x, height, ...rest}, index) => {
          return (
            <a.div
              key={[index]}
              className="trails-animation"
              style={{
                ...rest
              }}
            >
              {
                items[index]
              }
            </a.div>
          )})}
      </div>
  )
}

export default SpringScale;

