import React from 'react'
import NewsSlider from '../Widgets/NewsSlider/slider';
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
        </div>
    )
}
