import React, { Component } from 'react'
import { Grid } from '@progress/kendo-grid-react-wrapper';

class GridTable extends Component {
    render() {    
        var people = [ { firstName: "John",
        lastName: "Smith",
        email: "john.smith@telerik.com" },
      { firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@telerik.com" },
      { firstName: "Josh",
        lastName: "Davis",
        email: "josh.davis@telerik.com" },
      { firstName: "Cindy",
        lastName: "Jones",
        email: "cindy.jones@telerik.com" } ];
        return (
         <div className="App">
          <Grid dataSource={people}/>
         </div>
        );
       }
}

export default GridTable