import React, {useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const WineList =(props)=> {

  const quickCheck =()=> {
    if (props.wines === undefined) {
        return ""
    }  else {
      return (props.wines.map((wine, idx)=> {
        return (
          <tr>
            <th scope="col">{wine.id}</th>
            <th ><Link scope="col"to={`/wines/${wine.id}`}>{wine.wine_name}</Link></th>
            <th scope="col">{wine.price}</th>
            <th scope="col">{wine.varietal}</th>
            <th scope="col">{wine.description}</th>
          </tr>
        )
      }))
    }

  }

    return (
      <div>
          <h1>Some Wines:</h1>
          
          <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Varietal</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          { quickCheck() }
          </tbody>
      </table>
      </div>
    )
  
}

export default WineList