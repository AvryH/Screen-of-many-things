import React, { SyntheticEvent} from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";
import "./DraggableWrapper.css"

//enum for where on the widget you can click to resize it
type HandleLocations = 'sw'|'se'|'nw'|'ne'|'w'|'e'|'n'|'s'

interface DraggableWrapperProps {
  children: React.ReactNode
  resizeHandleLocations?:[HandleLocations]
  startHeight?: number;
  startWidth?: number;
}
export const DraggableWrapper: React.FunctionComponent<DraggableWrapperProps> = (props) => {
  //prevents draggin while resizing the widget
  const [isResizing, setResizing] = React.useState(false);

  const resizeOn = (e:SyntheticEvent) =>{
    e.stopPropagation()
    setResizing(true)
  }

  const resizeOff = (e:SyntheticEvent) =>{
    e.stopPropagation()
    setResizing(false)
  }

  return (
    //handle is a css selector to the elements that will drag the window
    <Draggable disabled={isResizing} handle=".dragHandle" >
      <div >
      <ResizableBox height={props.startHeight||0} width={props.startWidth||0} resizeHandles={props.resizeHandleLocations}
      onResizeStart={resizeOn}
      onResizeStop={resizeOff}
      >
      <span className="dragHandle">
        --------------dragHere--------------
      </span>
      <div>
        {props.children}
      </div>
      </ResizableBox>
      </div>
    </Draggable>
  );
};

DraggableWrapper.defaultProps = {
  startHeight: window.innerHeight/2,
  startWidth: window.innerWidth/2,
  resizeHandleLocations:['se']
}