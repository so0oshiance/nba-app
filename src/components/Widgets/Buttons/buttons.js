import React from 'react'
import {Link} from 'react-router-dom'
import style from './buttons.css'
const Buttons=(props)=> {
    let template=null;
    switch (props.type) {
        case 'loadmore':
            template=(
                <div className={style.blue_btn}
                     onClick={props.loadmore}
                >
                        {props.cta}
                </div>
            )
            break;
        case 'link':
            template=(
                <Link className={style.blue_btn}
                      to={props.linkTo}
                >
                        {props.cta}
                </Link>
            )
            break;
        default:
            template=null;
            break;
    }
    return template;
}
export default Buttons;
