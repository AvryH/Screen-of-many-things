import React from "react";
import { DraggableWrapper } from "./higherOrderComponents/DraggableWrapper";

interface testProps {
  inputText?: string
}

export const TestComponent: React.FunctionComponent<testProps> = (props) => {
  return (
      <DraggableWrapper>
          <p>Some Text and stuff and {props.inputText || "no props entered this is the default"}</p>
    </DraggableWrapper>
  )
};