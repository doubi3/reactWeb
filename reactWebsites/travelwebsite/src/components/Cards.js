import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/girl1.jpg" 
                        text="Soar for greater heights"
                        label="Glory"
                        path="/services"/>

                        <CardItem 
                        src="images/people1.jpg" 
                        text="Meet new people"
                        label="Love"
                        path="/services"/>

                        <CardItem 
                        src="images/girl2.jpg" 
                        text="Be yourself"
                        label="Mundane"
                        path="/services"/>

                     </ul>
                     <ul className="cards__items">
                        
                        <CardItem 
                        src="images/sparkles.jpg" text="Po
                        nder on the universe"
                        label="Colors"
                        path="/services"/>

                        <CardItem 
                        src="images/woman.jpg" text="Explore beauty"
                        label="Beauty"
                        path="/services"/>

                        <CardItem 
                        src="images/youth.jpg" text="Be yound at heart"
                        label="Fun"
                        path="/services"/>
                     </ul>        
                </div>    
            </div>          
        </div>
    )
}

export default Cards
