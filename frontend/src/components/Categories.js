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
