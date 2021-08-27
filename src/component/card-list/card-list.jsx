import './card-list.styles.css'
import {Card} from '../card/card'


export const CardList =props=>(

    <div className="card-list">
               {props.monsters.map(monster=>(
                    < Card monster={monster} key={monster.id}/>
               ))}
    </div>
    // https://robohash.org/1?set=set2
)