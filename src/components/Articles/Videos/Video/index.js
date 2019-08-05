import React, { Component } from 'react'
import axios from 'axios';
import {URL} from '../../../../config';
import style from '../../articles.css';
import Header from './header'
export default class index extends Component {
    
    state={
        article:[],
        team:[]
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
                                    })
                                      
                                })
                    })
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
            </div>
        )
    }
}
