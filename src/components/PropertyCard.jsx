import React from 'react';
// send values as props to this from json file
const PropertyCard = () => {
    return(
        <section>
            <img src={"#"} alt={"#"}></img>
            <h3>Type: {}</h3>
            <h4>Brand: {}</h4>
            <h4>Location: {}</h4>
            <h4>Added: {}</h4>
            <button>Add to Favourites</button>
        </section>
    );
};

export default PropertyCard;