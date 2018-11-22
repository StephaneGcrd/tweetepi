import React from 'react'
import { LineSeries } from 'react-vis';

const Lineserie = (props) => {
    console.log(props);
    return (
        
      <LineSeries
                            data={props.data}
              color={props.color}
                        style={{ strokeWidth: 6 }}
                            onSeriesMouseOver={
                                (event) => {
                                    this.setState({
                                        label: props.word,
                                        color: props.color
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

  )
}

export default Lineserie
