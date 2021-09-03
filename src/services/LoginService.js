import axios from "axios"
const ENDPOINT = 'http://challenge-react.alkemy.org/'

class LoginService {
  //retrieveTask
  static async getJTW(user,callback) {
    const sendPostRequest = async () => {
      try {
          const resp = await axios.post(ENDPOINT, user);
          console.log(resp.data);
          callback();
          return true
      } catch (err) {
          // Handle Error Here
          console.error(err);
          return false
      }
  };
  };

}
export default LoginService