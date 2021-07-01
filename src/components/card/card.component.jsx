import React from 'react'
import './card.styles.css'
import monster0 from '../../images/monster0.png'
import monster1 from '../../images/monster1.png'
import monster2 from '../../images/monster2.png'
import monster3 from '../../images/monster3.png'
import monster4 from '../../images/monster4.png'
import monster5 from '../../images/monster5.png'
import monster6 from '../../images/monster6.png'
import monster7 from '../../images/monster7.png'
import monster8 from '../../images/monster8.png'
import monster9 from '../../images/monster9.png'

const images = {
    0: monster0,
    1: monster1,
    2: monster2,
    3: monster3,
    4: monster4,
    5: monster5,
    6: monster6,
    7: monster7,
    8: monster8,
    9: monster9,
}

export const Card = ({monster}) => (
    <div className="card-container">
        <img src={images[monster.id]} alt={`monster ${monster.id}`} />
        <h2 className="text-lg">{monster.name}</h2>
        <p>{monster.email}</p>
    </div>)