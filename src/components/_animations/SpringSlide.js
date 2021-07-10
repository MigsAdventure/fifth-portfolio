import React, { useRef, useState, useEffect } from "react";
import {animated as a, useTransition, useSpring, useTrail} from "react-spring";
import {elementInView} from "../../utils/hooks";
import styled from "styled-components";

const Wrapper = styled.div`
   ${
      ({ componentstyle }) => componentstyle !== 'false' && `
        //add styles
        display: flex;
        height: 200px;
        width: 100%;
        flex-wrap: wrap;
        justify-content: evenly-spaced;
        align-items: flex-start;
    `}
`;

const InnerWrapper  = styled(a.div)`
   ${
    ({ componentstyle }) => componentstyle !== 'false' && `
      //add styles
      display: inline-flex;
      height: 100%;
      width: 100%;
      min-width: 200px;
      @media(min-width: 480px) {
        width: 31%;
      }
      @media(min-width: 1024) {
      }
  `}
`;

const SpringSlide = ({children, ...props}) => {
  // Ref for the element that we want to detect whether on screen
  const [list, setList] = useState([]);
  const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 200px of element is visible.
  const onScreen = elementInView(((props.trackScreen && ref) || ref), props.animateMargin || "-200px");
  // let items = [];
  // items.length < 1 && onScreen && (items=React.Children.toArray(children));
  if (onScreen) {
    !props.reAnimate && list.length < 1 && onScreen && setList(React.Children.toArray(children));
  }
  
  useEffect(() => {
    if(props.reRender){
      window.innerWidth >= 768 && setList([]);
      list.length < 1 && onScreen && setList(React.Children.toArray(children));
    }
  }, [props.reRender])
  
  if(props.reAnimate) {
    // items = props.reAnimate && !onScreen ? React.Children.toArray(children) : []
    if (!onScreen && list.length >= 1) {
      !onScreen && console.log('remove was triggered')
      window.innerWidth >= 768 && !onScreen && setList(list => list.filter((x, i) => i < list.length - 1));
      // !onScreen && (items = []);
    }
    else {
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
    <Wrapper className={`spring-slide-wrapper ${props.classNames}`} componentstyle={props.componentStyle} ref={ref}>
      {transition((styles, item) => (
        <InnerWrapper
          className={`spring-slide-inner`}
          style={styles}
          componentstyle={props.componentStyle.toString()}
        >
          {item}
        </InnerWrapper>
      ))}
    </Wrapper>
  )
}

// Set default props
SpringSlide.defaultProps = {
  classNames: '',
  componentStyle: true
}

export default SpringSlide;
