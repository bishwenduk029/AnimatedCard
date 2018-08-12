import styled from "react-emotion";

export const CardLayout = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  cursor: pointer;
  height: ${props => `${props.height}px`};
  padding: 0 20px;
  -webkit-tap-highlight-color: rgba(0,0,0,0.025);
  text-align: center;
  transition: height 385ms ease-in;
  width: 260px;
`;

export const CardBody = styled("div")`
  width: 100%;
  height: 85%;
`;

export const CardFooter = styled("div")`
  height: 15%;
  padding-top: 5%;
  transform: ${props => `rotate(${props.rotate}deg)`};
  transition: transform 225ms 15ms ease-in;
`;
