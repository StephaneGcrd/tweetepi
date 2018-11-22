import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export default class FeedMaladie extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         feed:  []
      }
        this.mapTweets = this.mapTweets.bind(this)
    }

    componentDidMount() {
        var that = this;
        axios.get('http://51.38.48.44:1234/last_words')
          .then(function (response) {
              console.log(response.data)
              that.setState({
                  feed: response.data
              })
            })
          .catch(function (error) {
            console.log(error);
          });
    }

    mapTweets() {

    }
    
  render() {
    return (
        <div className="col s5">
            <div className="card-panel white tweetwrap">
                <div className="card-title">Feed tweets</div>
                <div className="card-content">
                
                    {        this.state.feed.map( (obj,i) => {
            return(
                <div key={i}>
                    <p>Tweet à propos de<span className="wordfeed"> {capitalize(obj.word)}</span>  <span className="datefeed">{moment(obj.datetime).startOf().fromNow()}</span> </p>
                </div>
        );
        })}
                </div>
                
            
            </div>
        </div>
    )
  }
}
