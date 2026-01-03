import React from 'react';
import Bed from '../assets/bed.png';
import Call from '../assets/call.png';
import Contact from '../assets/contact.png';
import House from '../assets/house.png';
import Link from '../assets/link.png';

// send values as props to this from json file
const PropertyCard = (props) => {
    return(
        <div className="product-card">
            <img src={props.picture} alt={"#"} className="profile-picture"></img>

            <div className="property-details">
                <div className="property-header">
                    <p id="location">{props.location}</p>
                     <h3 id="price">€{props.price}</h3>      
                </div>
                <p id="date">Added on {props.added.month} {props.added.day}, {props.added.year}</p>
                <p>{props.description}</p>
                <div className="icon-groups">
                    <div className="icon-group">
                        <img src={House} alt="Bed icon"></img>
                        <p>{props.type}</p>
                    </div>

                    <div className="icon-group">
                        <img src={Bed} alt="Bed icon"></img>
                        <p>{props.bedrooms}</p>
                    </div>

                    <div className="icon-group">
                        <img src={Link} alt="Bed icon"></img>
                        <a href="#">More</a>
                    </div>
                </div>
                
                <div className="product-card-footer">
                    <div className="contact-details">
                        <div className="contact-group">
                            <img src={Call} alt="telephone icon"></img>
                        </div>
                        <div className="contact-group" id="mail">
                            <img src={Contact} alt="mail icon"></img>
                        </div>
                    </div>
                    <button id="favourite-button">Add to Favourites</button>
                </div>
            </div>
        </div>
    );
};

/*
 {
    "id":"prop1",
    "type":"House", - 
    "bedrooms":3, - 
    "price":750000, -
    "tenure":"Freehold",
    "description":"Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
    "location":"Petts Wood Road, Petts Wood, Orpington BR5", -
    "picture":"images/prop1pic1small.jpg",
    "url":"properties/prop1.html",
    "added": { - 
        "month":"October",
        "day":12,
        "year":2022
    }
},
*/

export default PropertyCard;