import React from 'react'
import style from './cardinfo.css';
import FontAwesome from 'react-fontawesome'
export default function CardInfo(props) {
    const teamName=(teams,team)=>{
        console.log("team:",team);
        
        let data= teams.find(item=>{
            return item.id===team
        })
        if (data) {
            return data.name
        }
    }
    return (
        <div className={style.cardInfo}>
            <span className={style.teamName}>
               {teamName(props.teams,props.team)}
            </span>
            <span className={style.date}>
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
}
