import React, { Component } from 'react'
import axios from 'axios';
import {URL} from '../../../../config';
import style from '../../articles.css';
import Header from './header'
import VideosRelated from '../../../Widgets/VideosList/videosRelated/videosrelated'
export default class index extends Component {
    
    state={
        article:[],
        team:[],
        teams:[],
        related:[]
    }
    componentWillMount(){
        axios.get(`${URL}/videos/?id=${this.props.match.params.id}`)
                  .then(response=>{
                      //console.log(response.data);
                      let article=response.data[0];
                      axios.get(`${URL}/teams/?id=${article.team}`)  
                                .then(response=>{
                                    this.setState({
                                        article,
                                        team:response.data
                                    });
                                    this.getRelated();  
                                });
                    });
    }
    getRelated=()=>{
        console.log("RELATED:",this.state);
        
        axios.get(`${URL}/teams`)
                  .then(response=>{
                      console.log(response.data);
                        let teams=response.data;
                        axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`)
                                    .then(response=>{
                                            this.setState({
                                                teams,
                                                related:response.data
                                            });
                                    });
                    });

    }
    render() {
        console.log("VIDEO:",this.state);
        const article=this.state.article;
        const team=this.state.team;
        return (
            <div>
            <Header
                     teamData={team[0]}
            />
            <div className={style.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                    ></iframe>
            </div>
            <VideosRelated
                data={this.state.related}
                teams={this.state.teams}
            />
            </div>
        )
    }
}
