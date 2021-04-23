import React, { SyntheticEvent, useState } from "react";
import { DraggableWrapper } from "./higherOrderComponents/DraggableWrapper";
import "./map-component.css"

interface mapComponentProps {
  startHeight?: number;
  startWidth?: number;
  mapSrc?: string;
}

export const MapComponent: React.FunctionComponent<mapComponentProps> = (props) => {

  return (
    <DraggableWrapper startHeight={props.startHeight} startWidth={props.startWidth} >
      <div className='mapContainer'>
        <img  className='mapImg' src={props.mapSrc} alt={props.mapSrc} draggable={false} />
      </div>
    </DraggableWrapper>
  );
};

MapComponent.defaultProps = {
  startHeight: window.innerHeight/2,
  startWidth: window.innerWidth/2,
  mapSrc: "resources/maps/Bryn-Shander.jpg",
};
