import React from "react";
import Draggable from "react-draggable";

interface DraggableWrapperProps {
    children: React.ReactNode
  }
export const DraggableWrapper: React.FunctionComponent<DraggableWrapperProps> = (props) => {
  return <Draggable><div>{props.children}</div></Draggable>;
};
