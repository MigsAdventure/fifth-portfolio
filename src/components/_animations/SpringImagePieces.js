import * as mathjs from "mathjs";
import React, { useEffect, useRef, useState } from "react";
import { animated, useSprings } from "react-spring";
import styled from "styled-components";

// https://tympanus.net/codrops/2017/07/26/animated-image-pieces/

const Figure = styled.figure`
  position: relative;
  display: block;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;

  opacity: 0;
`;

const Tiles = styled.div`
  position: absolute;
  top: 0;
  perspective: 600px;

  display: flex;
  flex-wrap: wrap;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 0 0;
`;

const Tile = styled(animated.div)`
  position: relative;

  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${props => props.src});
  background-size: ${props => `${props["img-width"]}px auto`};
  background-position: ${props =>
  `${-1 * props["data-column"] * 100}% ${-1 * 100 * props["data-row"]}%`};

  overflow: hidden;

  &[data-debug]:after {
    position: absolute;
    top: 0;
    left: 0;
    content: "(" attr(data-row) ", " attr(data-column) ")";
    background: rgba(255, 255, 255, 0.7);
  }
`;

const SpringImagePieces = ({ src, rows = 8, columns = 10, delay = 600 }) => {
  const [imgLoaded, setImageLoaded] = useState(false);
  const [state, setState] = useState({
    tiles: []
  });
  const imgRef = useRef(null);
  
  useEffect(() => {
    if (!imgLoaded) {
      return;
    }
    
    const dimensions = imgRef.current.getBoundingClientRect();
    
    const arr = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        arr.push({
          r,
          c
        });
      }
    }
    
    console.log(dimensions);
    
    setState({
      imgWidth: dimensions.width,
      imgHeight: dimensions.height,
      tileWidth: Math.floor(dimensions.width / columns),
      tileHeight: Math.floor(dimensions.height / rows),
      tiles: arr
    });
  }, [columns, imgLoaded, rows]);
  
  // stagger the minimum delay for each row `Math.floor(index / columns)`
  // by the total delay divided by number of rows - 1 `delay / (rows - 1)`
  const [springs] = useSprings(state.tiles.length, index => {
    const translateX = `${mathjs.randomInt(-50, 50)}px`;
    const translateY = `${mathjs.randomInt(0, 100)}vh`;
    const rotateZ = `${mathjs.randomInt(-45, 45)}deg`;
    return {
      delay: mathjs.randomInt(
        Math.floor(index / columns) * (delay / (rows - 1)),
        delay
      ),
      opacity: "1",
      transform: "translate3d(0px, 0vh, 0px) rotateZ(0)",
      from: {
        opacity: "0",
        transform: `translate3d(${translateX}, ${translateY}, -200px) rotateZ(${rotateZ})`
      }
    };
  });
  
  return (
    <Figure className={'image-pieces-wrapper'}>
      <Img src={src} ref={imgRef} onLoad={() => setImageLoaded(true)} alt="" />
      <Tiles>
        {springs.map((props, i) => {
          const item = state.tiles[i];
          
          return (
            <Tile
              key={`item-${item.r}-${item.c}`}
              style={props}
              data-row={item.r}
              data-column={item.c}
              width={state.tileWidth}
              height={state.tileHeight}
              img-width={state.imgWidth}
              src={src}
              // data-debug
            />
          );
        })}
      </Tiles>
    </Figure>
  );
};

export default SpringImagePieces;
