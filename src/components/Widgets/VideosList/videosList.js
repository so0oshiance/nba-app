import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from "../../../config";
import style from './videosList.css';
import Button from '../Buttons/buttons'
import VideosListTemplate from './videosListTemplate'

export default class VideosList extends Component {
    state={
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start +
            this.props.amount,
        amount:this.props.amount,
        loadmore:this.props.loadmore
    }
    showTitle=()=>{
        return this.props.title
                ?<div>
                    <strong>NBA</strong> videos
                </div>
                :null
    }
    renderButton=()=>{
        return this.props.loadmore
                ?<Button
                        type="loadmore"
                        loadmore={()=>this.loadmore()}
                        cta="Load more videos"
                />
                :<Button
                        type="link"
                        cta="more videos ..."
                        linkTo="/videos"
                 />
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
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
                 .then(response=>{
                     console.log("ITEMS:",this.state.videos);
                     
                    this.setState({
                        //this will add response data to prev items, we need this for loadmore btn
                        videos:[...this.state.videos,...response.data],
                        start,
                        end
                    })
                 })
    }
    loadmore=()=>{
        let end= this.state.end+ this.state.amount;
        this.request(this.state.end,end);
    }
    renderVideos=()=>{
        let template=null;
        switch (this.props.type) {
            case "card":
                template=<VideosListTemplate 
                                        data={this.state.videos}
                                        teams={this.state.teams}
                        />
                break;
        
            default:
                template=null;
                break;
        }
        return template;

    }
    render() {
        console.log("Videos",this.state.videos);
        
        return (
            <div className={style.videoList_wrapper}>
                {this.showTitle()}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
}
