import React from 'react'
import style from './header.css'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import SideNav from './SideNav/sideNav'
export default function Header(props) {
    // this method only returns JSX so we can write it like this without any return and {} !
    const navBar=()=>(
        <div className={style.bars}>
                <FontAwesome name="bars"
                             onClick={props.onOpenNav}
                            style={{
                                    color:'#dfdfdf',
                                    padding:'10px',
                                    cursor:'pointer'
                }} />
        </div>
    )
    const logo=()=>{
        return(
            <Link to="/" className={style.logo}>
                <img alt="NBA logo" src="/images/nba_logo.png" />
            </Link>
        )
    }

    return (
        <header className={style.header}>
                 <SideNav {...props}/>
                 <div className={style.headerOpt}>
                    {navBar()}
                    {logo()}
                </div>
        </header>
       
    )
}