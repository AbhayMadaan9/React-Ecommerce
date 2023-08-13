import styled, { keyframes, css } from 'styled-components';
import { categories } from '../data';
import React, { useState } from 'react';
import { Category_item } from './Category_item';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-550px)); /* Adjust the value based on the number of cards displayed at once */
  }
`;

const Container = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ::-webkit-scrollbar{ width: 0}
  ${({ anim }) =>
    anim
      ? css`
          animation: ${scrollAnimation} 7s linear infinite;
        `
      : css`
      overflow-x: auto
      `};
`;

export default function Categories() {
  const [anim, setAnim] = useState(true);

  return (
    <>
    <h1 style={{textAlign: "center"}}>Categories</h1>
    <Container anim={anim} onMouseEnter={() => setAnim(false)} onMouseLeave={() => setAnim(true)}>
      {categories.map((item) => (
        <Category_item item={item} key={item.id} />
      ))}
    </Container>
    </>
  );
}
