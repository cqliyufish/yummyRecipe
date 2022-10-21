import styled from "styled-components";

export const Card = styled.div`
  background-color: yellow;

  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`;

export const Title = styled.p`
   {
    ${"" /* background: yellow; */}
    position: absolute;
    z-index: 2;
    color: white;
    text-align: center;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    height: 4rem;
    line-height: 4rem;
  }
`;
export const Gradient = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
