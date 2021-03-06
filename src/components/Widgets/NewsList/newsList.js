import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from "../../../config";
import style from './newsList.css';
import Button from '../Buttons/buttons'
import CardInfo from '../CardInfo/cardInfo'
export default class NewsList extends Component {
    state={
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start +
            this.props.amount,
        amount:this.props.amount,
        loadmore:this.props.loadmore
    }
    componentWillMount(){
        this.request(this.state.start,this.state.end);
    }
    request=(start,end)=>{
        if(this.state.teams.length<1){
            axios.get(`${URL}/teams`)
                 .then(response=>{
                     this.setState({
                         teams:response.data
                     });
                 })
        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
                 .then(response=>{
                     console.log("ITEMS:",this.state.items);
                     
                    this.setState({
                        //this will add response data to prev items, we need this for loadmore btn
                        items:[...this.state.items,...response.data],
                        start,
                        end
                    })
                 })
    }
    loadmore=()=>{
        let end= this.state.end+ this.state.amount;
        this.request(this.state.end,end);
    }
    renderNews=(type)=>{
        let template=null;
        switch (type) {
            case 'card':
                template=this.state.items.map((item,i)=>(
                    <CSSTransition
                        classNames={{
                            enter:style.newsList_wrapper,
                            enterActive:style.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={style.newsList_item}>
                                <Link to={`/articles/${item.id}`}>
                                     <CardInfo
                                        teams={this.state.teams}
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                    </div>
                    </CSSTransition>
                ))
                break;
            case 'cardMain':
                template=this.state.items.map((item,i)=>(
                    <CSSTransition
                        classNames={{
                            enter:style.newsList_wrapper,
                            enterActive:style.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        
                    <Link to={`/articles/${item.id}`}>
                        <div className={style.flex_wrapper}>
                            <div className={style.left}
                                 style={{
                                     background:`url('/images/articles/${item.image}')`
                                 }}
                            >
                                <div></div>
                            </div>
                            <div className={style.right}>
                            <CardInfo
                                        teams={this.state.teams}
                                        team={item.team}
                                        date={item.date}
                                    />
                                    <h2>{item.title}</h2>
                            </div>
                        </div>
                    </Link>    
                   
                    </CSSTransition>
                ))
                break;
        
            default:
                template=null;
                break;
        }
        return template;
    }
    render() {
       // console.log(this.state.teams);
        
        return (
            <div>
                <TransitionGroup
                        component="div"
                        className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button 
                    type="loadmore"
                    loadmore={()=>this.loadmore()}
                    cta="Load more News"
                />
            </div>
        )
    }
} 
