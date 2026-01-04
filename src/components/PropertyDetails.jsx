import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/properties.json";

const PropertyDetails = () => {
  const { id } = useParams();
  const prop = data.properties.find((item) => item.id === id);
  if (!prop) {
    return (
        <div>
            <h1>No property found</h1>
        </div>
    )
  } else {
    
    // Gallery arrow functions
    const [imgIndex, changeImgIndex] = useState(1);
    function previousImg(){
        changeImgIndex(imgIndex > 1 ? imgIndex-1 : 7)
    }

    function nextImg(){
        changeImgIndex(imgIndex < 7 ? imgIndex+1 : 1)
    }

    // Tab functionality
    const [toggleContent, changeToggleContent] = useState(1)
    function updateToggle(id){
        changeToggleContent(id);
    }

    return (
        <div className="property-details">
            <h1>Property details</h1>
            <h1>{prop.location}</h1>

            <h4>Gallery</h4>
            <div className="property-gallery">
                <button onClick={previousImg}><img src="/images/left-arrow.png"></img></button>
                <img src={`/images/${prop.id}/${imgIndex}.jpeg`} id="image-view"></img>
                <button onClick={nextImg}><img src="/images/right-arrow.png"></img></button>
            </div>

            <div className="property-sub-details">
                <p>Bedrooms: {prop.bedrooms}</p>
                <p>Price: €{prop.price}</p>
                <p>Type: {prop.type}</p>
            </div>

            <div className="tab-section">
                <ul className="tab-headings">
                    <li>Description</li>
                    <li>Floor plan</li>
                    <li>Google maps</li>
                </ul>
                <div className="show-content" id="description">
                    <p>{prop.description}</p>
                </div>

                <div className="show-content" id="floor-plan">
                    <img src={`/images/${prop.id}/floor-plan.jpg`}></img>
                </div>


                <div className="show-content" id="google-maps"> 
                    <h3>Google Maps Location</h3>
                    <a href={`${prop["google-link"]}`}>View on maps</a>
                </div>
            </div>
        </div>
    );
  }

  
};

export default PropertyDetails;
