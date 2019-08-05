import React from 'react'
import style from '../articles.css'

export default function teamInfo(props) {
    return (
        <div className={style.artickeTeamHeader}>
            <div className={style.left}
                 style={{
                     background:`url('/images/teams/${props.team.logo}')`
                 }}
            >
            </div>
            <div className={style.right}>
                <div>
                    <span>{props.team.city} {props.team.name} </span>
                   <strong> W:{props.team.stats[0].wins}-L:{props.team.stats[0].defeats}</strong>
                </div>
            </div>
        </div>
    )
}
