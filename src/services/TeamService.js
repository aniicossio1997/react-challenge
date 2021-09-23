import TeamApi from "../api/TeamApi";

class TeamService{

  //devuelve el equipo
  static async retrieveTeam(callback){ 
      let promises = [];
      const arrayData = []
      const arrayIDs = JSON.parse(window.localStorage.getItem('teamId'))
      if ((arrayIDs.length)===0) {
        return []
      }
      for(let id of arrayIDs) {
        promises.push( await TeamApi.getByID(id).then(response => {
          arrayData.push(response.data)
        }).catch(e => {
          console.log(e)
        }))
      }
      await Promise.all(promises).then(() => {
        window.localStorage.setItem('teamData',JSON.stringify(arrayData))

      });

      return arrayData
  }
  static async deleteTeam(id){

  }
}
export {TeamService}