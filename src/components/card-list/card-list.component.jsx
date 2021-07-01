import React from 'react'
import {Card} from '../card/card.component'

export const CardList = ({monsters}) => (
    <div className="grid grid-cols-4fr gap-5 h-100 w-[85vw] mx-auto my-0 ">
        {monsters.map((monster) => <Card monster={monster} key={monster.id} />)}
    </div>
)