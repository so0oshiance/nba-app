import React from 'react'
import style from '../videosList.css'
import VideoListTemplate from '../videosListTemplate'

export default function videosrelated(props) {
    return (
        <div className={style.relatedWrapper}>
            <VideoListTemplate
                data={props.data}
                teams={props.teams}
            />
            
        </div>
    )
}
