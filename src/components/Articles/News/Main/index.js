import React from 'react'
import NewsSlider from '../../../Widgets/NewsSlider/slider'
import NewsList from '../../../Widgets/NewsList/newsList';

export default function NewsMain() {
    return (
        <div>
            <NewsSlider
                type="featured"
                settings={{dots:false}}
                start={0}
                amount={3}
            />
            <NewsList
                type="cardMain"
                loadmore={true}
                start={3}
                amount={10}
            />
        </div>
    )
}
