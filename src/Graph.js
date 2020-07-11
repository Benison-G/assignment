import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../node_modules/react-linechart/dist/styles.css';
 
function Graph(props) {
    return (
        <div className="App">
            <LineChart 
                width={500}
                height={300}
                data={props.data}
                xLabel="ID"
                yLabel="Votes"
            />
        </div>				
    );
}

export default Graph;