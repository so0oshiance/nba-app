import React from 'react'
import NewsSlider from '../Widgets/NewsSlider/slider';
import NewsList from '../Widgets/NewsList/newsList';
import VideosList from '../Widgets/VideosList/videosList';
export default function home() {
    return (
        <div>
           <NewsSlider type="featured"
                       start={0}
                       amount={3}
                       settings={{
                            dots:false
                       }}
                       />
            <NewsList
                    type="card"
                    start={3}
                    amount={3}
                    loadmore={true}
            />
            <VideosList
                    type="card"
                    title={true}
                    start={0}
                    amount={3}
                    loadmore={true}
            />
        </div>
    )
}
