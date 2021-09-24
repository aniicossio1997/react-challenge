import axios from "axios"
const ENDPOINT = 'http://challenge-react.alkemy.org/'

class LoginService {
  //retrieveTask
  static async getJTW(user,callback) {
    const sendPostRequest = async () => {
      try {
          const resp = await axios.post(ENDPOINT, user);
          callback();
          return true
      } catch (err) {
          // Handle Error Here
          return false
      }
  };
  };

}
export default LoginService