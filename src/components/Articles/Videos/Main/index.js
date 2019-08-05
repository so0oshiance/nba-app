import React from 'react'
import VideosList from '../../../Widgets/VideosList/videosList'
export default function index() {
    return (
        <div>
            <VideosList
                    type="card"
                    title={false}
                    start={0}
                    amount={10}
                    loadmore={true}
            />
        </div>
    )
}
