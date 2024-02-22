import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 20%;
    min-width: 120px;
    max-width: 160px; */
    /* height: 260px; */
    gap: 5px;

    & .message{
      text-align: center;
      font-size: 12px;
      color: #ff8154;
    }
 `

export const CardBox = styled.div`
  background: #f0f0f0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  //
  width: 160px;
  height: 240px;
  padding: 0%;

  & img {
    width: 75%;
    max-width: 180px;
    height: 70%;
    max-height: 200px;
    border-radius: 5px;
  }

  & > p {
    color: #180045;
    font-size: 12px;
    font-weight: 600;
    width: 90%;
    text-align: center;
  }
`