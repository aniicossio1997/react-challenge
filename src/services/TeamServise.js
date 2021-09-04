import axios from 'axios'

const ENDPOINT = 'https://www.superheroapi.com/api.php/3156431871251248'

class TeamServise{
  static withID(id){
    return `${ENDPOINT}/${id}`
  }
  static async retrieveTeam(callback){
    
      let promises = [];
      let i = 0
      const arrayData = []
      const arrayIDs = JSON.parse(window.localStorage.getItem('teamId'))
      if ((arrayIDs.length)===0) {
        callback([])
        return false
      }
      for (i = 0; i < arrayIDs.length; i++) {
        promises.push( await axios.get(TeamServise.withID(arrayIDs[i])).then(response => {
          arrayData.push(response.data)
        }).catch(e => {
          console.log(e)
        }))
      }
      Promise.all(promises).then(() => {
        window.localStorage.setItem('teamData',JSON.stringify(arrayData))
        callback(arrayData)

      });

      return true

  }
  static async deleteTeam(id){

  }
}
export {TeamServise}