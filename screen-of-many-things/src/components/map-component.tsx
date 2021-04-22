import React from "react";
import { DraggableWrapper } from "./HOC/DraggableWrapper";
import "./map-component.css"

interface mapComponentProps {
  mapSrc?: string;
}

export const MapComponent: React.FunctionComponent<mapComponentProps> = (props) => {
  return (
    <DraggableWrapper>
      <img className='mapBox' src={props.mapSrc} alt={props.mapSrc} draggable={false} height={160}  width={90}/>
    </DraggableWrapper>
  );
};

MapComponent.defaultProps = {
  mapSrc: "resources/maps/Bryn-Shander.jpg",
};
