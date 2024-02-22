import styled from "styled-components";


export const Wrapper = styled.div`
  width: 95%;
  max-width: 300px;
  position: relative;
  & .prev{
    top: 50%;
    left: 0;
    transform: translate(50%, -50%);
    display: none;
  }

  & .next{
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 568px) {
    max-width: 500px;
  }

  @media screen and (min-width: 768px) {
    max-width: 680px;
  }

  @media screen and (min-width: 968px) {
    max-width: 850px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 960px;
  }

 `

export const Carousel = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;

  & ::-webkit-scrollbar{
    height: 0;
  }
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  background: white;
  border: none;
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;
  position: absolute;

`

export const Content = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-auto-flow: column;
  margin: 0 20px;
  box-sizing: border-box;

  & .item{
    width: 180px;
    height: 180px;
    background: green;
  }
`