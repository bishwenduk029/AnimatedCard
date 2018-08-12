import styled from "react-emotion";

export const CardLayout = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  height: ${props => `${props.height}px`};
  padding: 0 20px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.025);
  text-align: center;
  transition: height 385ms ease-in;
  width: 260px;
`;

export const CardBody = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardFooter = styled("div")`
  transform: ${props => `rotate(${props.rotate}deg)`};
  transition: transform 325ms 15ms ease-out;
`;

export const TextBody = styled("p")`
  transform: ${props => `translateY(${props.yShift}px)`};
  color: ${props => `rgba(0, 0, 0, ${props.fade ? 1 : 0})`};
  transition: color 300ms 50ms ease-in,
    transform 325ms 18ms cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export const ImageContent = styled("div")`
  width: 100%;
  z-index: 1;
`;
