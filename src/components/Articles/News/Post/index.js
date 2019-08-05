import React, { Component } from 'react'
import axios from 'axios';
import {URL} from '../../../../config';
import style from '../../articles.css';
import Header from './Header'
import Body from './Body'
export default class NewsArticles extends Component {
    state={
        article:[],
        team:[]
    }
    componentWillMount(){
        axios.get(`${URL}/articles/?id=${this.props.match.params.id}`)
                  .then(response=>{
                      //console.log(response.data);
                      let article=response.data[0];
                      axios.get(`${URL}/teams/?id=${article.team}`)  
                                .then(response=>{
                                    this.setState({
                                        article,
                                        team:response.data[0]
                                    })
                                      
                                })
                    })
    }
    render() {
        const article=this.state.article;
        const team=this.state.team;
        
        return (
            <div className={style.articleWrapper}>
               <Header
                        teamData={team}
                        date={article.date}
                        author={article.author}
               />
               <Body/>
            </div>
        )
    }
}
