import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, LabelSeries} from 'react-vis';

const Timeserie = (props) => {

    const data_grippe = [
        { x: 1, y: 4},
        { x: 2, y: 4.5 },
        {x: 3, y: 5.5},
        {x: 4, y: 4.5},
        {x: 5, y: 7}
    ]

    const data_angine = [
        { x: 1, y: 1 },
        { x: 2, y: 1.5 },
        {x: 3, y: 2},
        {x: 4, y: 2},
        {x: 5, y: 3}
    ]

    return (
        <div className="col s6">
            <div className="card-panel white z-depth-4">
                <div className="card-title">{props.title}</div>
                
                <XYPlot
                    
                width={500}
                height={300}>
                <VerticalGridLines />
                    <HorizontalGridLines
                
                    />
                <XAxis />
                    <YAxis />

                    <LineSeries
                        data={data_grippe}
                        color="#42a5f5"
                        style={{ strokeWidth: 2 }}
                        onSeriesClick={
                            (event) => {
                                console.log("grippe");
                                this.style.strokeWidth = 4;
                        }
                        }

                        />
                <LineSeries
                    data={data_angine}/>
                </XYPlot>
            
            </div>
            
        </div>
            
        );
}
export default Timeserie;