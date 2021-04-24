import React, { SyntheticEvent} from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "./DraggableWrapper.css"

interface DraggableWrapperProps {
  children: React.ReactNode
}
export const DraggableWrapper: React.FunctionComponent<DraggableWrapperProps> = (props) => {
  const [isResizing, setResizing] = React.useState(false);

  const resizeOn = (e:SyntheticEvent) =>{
    e.stopPropagation()
    console.log("stopprop")
    setResizing(true)
  }

  const resizeOff = (e:SyntheticEvent) =>{
    e.stopPropagation()
    console.log("stopprop")
    setResizing(false)
  }

  return (
    <Draggable disabled={isResizing} handle=".dragHandle" >
      <div >
      <ResizableBox height={100} width={900} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}
      onResizeStart={resizeOn}
      onResizeStop={resizeOff}
      >
      <span className="dragHandle">
        --------------------dragHere---------------
      </span>
      <div>
        {props.children}
      </div>
      </ResizableBox>
      </div>
    </Draggable>
  );
};
