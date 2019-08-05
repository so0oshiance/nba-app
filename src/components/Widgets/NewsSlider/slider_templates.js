import React from 'react'
import Slick from 'react-slick'
import style from './slider.css'
import { Link } from 'react-router-dom'
export default function SliderTemplates(props) {
    let template=null;
    const settings={
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        SlidesToScroll:1,
        ...props.settings
        //this is ES6 ! it will get all props settings and would over write items 
        // that has new values!
    }
    switch (props.type) {
        case "featured":
            template=props.data.map((item,i)=>{
                return(
                    <div key={i}>
                       <div className={style.featured_item}>
                            <div className={style.featured_image}
                                 style={{
                                     background:`url(../images/articles/${item.image})`
                                 }}></div>
                            <Link to={`/articles/${item.id}`}>
                                <div className={style.featured_caption}>
                                    {item.title}
                                </div>
                            </Link>
                       </div>
                    </div>
                )
            })
            break;
    
        default:
            template=null
            break;
    }
    return (
        <Slick {...settings}>
            {template}
        </Slick>
    )
}
