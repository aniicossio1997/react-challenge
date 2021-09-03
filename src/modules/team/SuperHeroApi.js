const ENDPOINT = 'https://www.superheroapi.com/api.php/3156431871251248'

class SuperHeroApi {
  static withID(id){
    return `${ENDPOINT}/${id}`
  }

}
export default SuperHeroApi