import React, { Component } from 'react'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, LabelSeries } from 'react-vis';
import axios from 'axios'




const data_grippe = [
    { x: new Date("02-01-2018"), y: 4},
    { x: new Date("02/02/2018"), y: 4.5 },
    {x: new Date("02/04/2018"), y: 5.5}
]

const data_angine = [
    { x: new Date("02/01/2018"), y: 1 },
    { x: new Date("02/02/2018"), y: 1.5 },
    {x: new Date("02/05/2018"), y: 2}

]







export default class Timeseries extends Component {
    constructor(props) {
    super(props)

        this.state = {
            label: ' ',
            color: '#FFFFFF',
            data: [],
            dataGrippe: [],
            dataAngine: [],
            dataMalGorge: [],
            dataRhume: [],
            dataToux: []
        }

        this.sortData = this.sortData.bind(this);
    }

    componentDidMount() {
        var that = this;
        axios.get('http://51.38.48.44:1234/all_reduce')
          .then(function (response) {
              console.log(response.data)
              var dataG = []
              var dataA = []
              var dataMG = []
              var dataR = []
              var dataT = []
              response.data.map(obj =>
                  dataG.push({ x: new Date(obj.date), y: obj.Grippe })
              );
              response.data.map(obj =>
                dataA.push({ x: new Date(obj.date), y: obj.Angine })
              );
              response.data.map(obj =>
                dataMG.push({ x: new Date(obj.date), y: obj.Mal_Gorge })
              );
              response.data.map(obj =>
                dataR.push({ x: new Date(obj.date), y: obj.Rhume })
              );
              response.data.map(obj =>
                dataT.push({ x: new Date(obj.date), y: obj.Toux })
              );

              that.setState({
                  dataGrippe: dataG,
                  dataAngine: dataA,
                  dataMalGorge: dataMG,
                  dataRhume: dataR,
                  dataToux: dataT
              });
        
            })
          .catch(function (error) {
            console.log(error);
          });
    }
    

    sortData() {
        var array1 = [1, 4, 9, 16];

        // pass a function to map
        
    }



    render() {
        return (
            <div className="col s12">
            <div id="graphique" className="card-panel white z-depth-4">
                    <div className="card-title">{this.props.title}</div>
            <div className="plotwrap">
                <XYPlot
                xType="time"
                width={1000}
                height={400}>
                
                            <XAxis/>
                    <YAxis />

                    <LineSeries
                            data={this.state.dataGrippe}
                            color="#b71c1c"
                        style={{ strokeWidth: 4 }}
                            onSeriesMouseOver={
                                (event) => {
                                    this.setState({
                                        label: 'Grippe',
                                        color: '#b71c1c'
                                    })
                               
                                }}
                            onSeriesMouseOut={
                                (event) => {
                                    this.setState({
                                        label: '',
                                        color: '#FFFFFF'
                                    })
                                   
                            }
                        }

                        />


                            
                        <LineSeries
                            data={this.state.dataToux}
                            color="#3949ab"
                        style={{ strokeWidth: 4 }}
                            onSeriesMouseOver={
                                (event) => {
                                    this.setState({
                                        label: 'Toux',
                                        color: "#3949ab"
                                    })
                               
                                }}
                            onSeriesMouseOut={
                                (event) => {
                                    this.setState({
                                        label: '',
                                        color: '#FFFFFF'
                                    })
                                   
                            }
                        }

                        />
                            
                        <LineSeries
                            data={this.state.dataAngine}
                            color="#7b1fa2"
                        style={{ strokeWidth: 4 }}
                            onSeriesMouseOver={
                                (event) => {
                                    this.setState({
                                        label: 'Angine',
                                        color: '#7b1fa2'
                                    })
                               
                                }}
                            onSeriesMouseOut={
                                (event) => {
                                    this.setState({
                                        label: '',
                                        color: '#FFFFFF'
                                    })
                                   
                            }
                        }

                            />
                            
                            <LineSeries
                            data={this.state.dataMalGorge}
                            color="#00acc1 "
                        style={{ strokeWidth: 4 }}
                            onSeriesMouseOver={
                                (event) => {
                                    this.setState({
                                        label: 'Mal de gorge',
                                        color: '#00acc1 '
                                    })
                               
                                }}
                            onSeriesMouseOut={
                                (event) => {
                                    this.setState({
                                        label: '',
                                        color: '#FFFFFF'
                                    })
                                   
                            }
                        }

                            />
                            
                            <LineSeries
                            data={this.state.dataRhume}
                            color= "#1e88e5"
                        style={{ strokeWidth: 4 }}
                            onSeriesMouseOver={
                                (event) => {
                                    this.setState({
                                        label: 'Rhume',
                                        color: '#1e88e5'
                                    })
                               
                                }}
                            onSeriesMouseOut={
                                (event) => {
                                    this.setState({
                                        label: '',
                                        color: '#FFFFFF'
                                    })
                                   
                            }
                        }

                        />
                </XYPlot>
                </div>
                    <div className="labelgraph" style={{ background: this.state.color }}>{this.state.label}</div>
                
            </div>
            
        </div>
        )
    }
}
