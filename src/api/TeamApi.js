import axios from 'axios'
const apiClient = axios.create({
// .. where we make our configurations
    baseURL: 'https://www.superheroapi.com/api.php/3156431871251248/'
});
class TeamApi{
  static getByID(id) {
    return  apiClient.get(id.toString())
  }
}
export default TeamApi