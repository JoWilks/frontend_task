import React, { Component } from 'react';
import Table from './Table.js'
import './App.css';
import { data } from './assets/cities.js'
import { Route, withRouter } from 'react-router-dom'

const keys = ["#", "City", "Country", "All_Buildings", "100m+", "150m+", "200m+", "300m+", "Telecom_Towers", "All_Structures"]

class App extends Component {

  state = {
      baseData: data,
      sortOfView: '#',
      sortedData: [] 
  }

  sortDataBy = (key) => {
    return this.state.baseData.sort(function(a, b) {
      if (!isNaN(a[key]) || !isNaN(b[key])) {
        return a[key] - b[key]
      } else {
        const textA = a[key].toUpperCase()
        const textB = b[key].toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }
    })
  }

  render() {
    return (
      <div className="App">
        <body>
        <Route exact path='/' component={props => <Table test={'/' }data={this.state.baseData} />} />
        <Route exact path='/id' component={props => <Table test={'#'} data={this.sortDataBy('#')} />} />
          {
            keys.map( string => 
              <Route key={string} path={`/${string}`} component={props => <Table test={string} data={this.sortDataBy(string)} />} />
            )
          }
        </body>
      </div>
    );
  }
}

export default withRouter(App)
