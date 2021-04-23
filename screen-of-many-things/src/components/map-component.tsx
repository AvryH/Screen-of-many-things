import React from "react";
import { DraggableWrapper } from "./higherOrderComponents/DraggableWrapper";
import "./map-component.css"

interface mapComponentProps {
  startHeight?: number;
  startWidth?: number;
  mapSrc?: string;
}

export const MapComponent: React.FunctionComponent<mapComponentProps> = (props) => {
  return (
    <DraggableWrapper startHeight={props.startHeight} startWidth={props.startWidth}>
      <img className='mapBox' src={props.mapSrc} alt={props.mapSrc} draggable={false} height={props.startHeight}  width={props.startWidth}/>
    </DraggableWrapper>
  );
};

MapComponent.defaultProps = {
  startHeight: window.innerHeight/2,
  startWidth: window.innerWidth/2,
  mapSrc: "resources/maps/Bryn-Shander.jpg",
};
