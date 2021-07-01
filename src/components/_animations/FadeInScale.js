import React from "react";
import {animated as a, useTrail, useSpring} from "react-spring";
import {withRouter} from "react-router-dom";


const FadeInScale = ({children, ...props}) => {
  const items = React.Children.toArray(children);
  const { progress } = useSpring({ progress: props.opacity && props.opacity.end || 1});
  const trail = useTrail(children.length || 1, {
    config: { mass: 1000, tension: 2000, friction: 2000, duration: props.duration || 2000 },
    scale: props.scale && props.scale.end || 1,
    opacity: progress,
    height: 100,
    x: 0,
    from: {opacity: props.opacity && props.opacity.start || 0, x: 0, height: 90, scale: props.scale && props.scale.start || 0}
  });
  return (
    <div>
      {trail.map(({x, height, ...rest}, index) => (
        <a.div
          key={[index]}
          className="trails-animation"
          style={{
            ...rest
          }}
        >
          {items[index]}
        </a.div>
      ))}
    </div>
  )
}

export default withRouter(FadeInScale);

