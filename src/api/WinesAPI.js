const baseURL = 'https://wine-api-project.herokuapp.com/wines/'

const getAllWines = async()=> {
    try {
    const response = await fetch(baseURL)
    const data = await response.json()
    return data
    } catch(error) {
        console.error(`You're a failure.. ${error}`)
    }
}

const getWineByID = async(wineID)=> {
    try {
        const response = await fetch(`${baseURL}${wineID}`)
        const data = response.json()
        return data
    } catch(error) {
        console.error(`Error Fetching Wine by ID: ${error}`)
    }
}

const addWine = async(wineObject) => {
    try {
    const submitData = await fetch("https://wine-api-project.herokuapp.com/wines/", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(wineObject)
    })
    return submitData.json()
    } catch (error) {
        console.log(`No post..${error}`)
    }
    
  }

export default {
    getAllWines,
    getWineByID,
    addWine,
}