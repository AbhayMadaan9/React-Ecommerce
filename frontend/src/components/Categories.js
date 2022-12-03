import styled from 'styled-components'
import {categories} from '../data';
import React from 'react'
import {Category_item} from './Category_item';

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px;
justify-content: space-between;
overflow-x: auto;
::-webkit-scrollbar{ width: 0}
/* animation: scroll 40% infinite;
@keyframes scroll {
  0%{
    transform: translate(0);
  }
  100%{
    transform: translate(100px);
  }
} */
`
export default function Categories() {
  return (
    <Container>
    {categories.map((item) => (
      <Category_item item={item} key={item.id} />
    ))}
  </Container>
  )
}
