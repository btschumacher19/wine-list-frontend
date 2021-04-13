import React, { Component } from 'react'
import WineList from '../components/WineList.js'
import WinesAPI from '../api/WinesAPI'

class HomePage extends Component {
  state = {
    wines: []
  }

  componentDidMount(){
    WinesAPI.getAllWines()
      .then((apiResponseJSON) => {
        console.log(apiResponseJSON)
        this.setState({
          wines: apiResponseJSON
        })
      }
    )
  }

  render() {
    return (
      <div>
        <h1> All Wines </h1>
        <WineList wines={this.state.wines} />
      </div>
    )
  }
}

export default HomePage