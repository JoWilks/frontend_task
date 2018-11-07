import React, { Component } from 'react';

const keys = ["Id", "City", "Country", "All_Buildings", "100m+", "150m+", "200m+", "300m+", "Telecom_Towers", "All_Structures"]

class Table extends Component {
  render() {
    console.log(this.props.data)
    return (
        <div> {this.props.test}
         <table>
             <tbody>
            <tr>
                {
                    keys.map(key => 
                        <th key={key}>{key}</th>
                        )
                }
            </tr>
            {
                this.props.data.map(row => 
                <tr>
                <td>{row['#']}</td>
                <td>{row['City']}</td>
                <td>{row['Country']}</td>
                <td>{row['All_Buildings']}</td>
                <td>{row['100m+']}</td>
                <td>{row['150m+']}</td>
                <td>{row['200m+']}</td>
                <td>{row['300m+']}</td>
                <td>{row['Telecom_Towers']}</td>
                <td>{row['All_Structures']}</td>
                </tr>
                )
            }
            </tbody>
         </table>
         </div>
    );
  }
}

export default Table;
