import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import {RadialChart} from 'react-vis';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export default class Topwords extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:  []
      }
        this.mapTweets = this.mapTweets.bind(this)
    }

    componentDidMount() {
        var that = this;
        axios.get('http://51.38.48.44:1234/all_reduce')
          .then(function (response) {
              var array = response.data.pop()
              var array2 = []

              console.log(array.Grippe)
              that.setState({
                  data: [{
                        angle: array.Grippe,
                      label: 'Grippe',
                      subLabel: array.Grippe,
                      color: "#ff8a80"
                        },
                      {
                          angle: array.Angine,
                          label: 'Angine',
                          subLabel: array.Angine,
                          color: "#ffeb3b"
                          
                      },
                      {
                          angle: array.Toux,
                          label: 'Toux',
                          subLabel: array.Toux,
                          color: "#eeff41"
                      },
                      {
                          angle: array.Mal_Gorge,
                          label: 'Mal de gorge',
                          subLabel: array.Mal_Gorge,
                          color: "#ffd54f"
                      },
                      {
                          angle: array.Rhume,
                          label: "Rhume",
                          subLabel:array.Rhume,
                          color: "#e0f2f1 "
                      }
                  ]
              })
              console.log(that.state.data)
              delete that.state.data._id;
              delete that.state.data.date;

        
            })
          .catch(function (error) {
            console.log(error);
          });
    }

    mapTweets() {

    }
    
  render() {
    return (
        <div className="col s7">
            <div className="card-panel white piewrap">
                <div className="card-title">Tweets du jour</div>
                <div className="piechartwrap">
                <RadialChart
                        data={this.state.data}
                        className= "testlabel"
                        showLabels={true}
                        colorType="literal"
                        
  width={330}
  height={330} />
                </div>



            
            </div>
        </div>
    )
  }
}
