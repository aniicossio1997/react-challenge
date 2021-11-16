import { useCallback, useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
const ENDPOINT = "http://challenge-react.alkemy.org/";

const useUser = () => {
  const { jwt, setJWT } = useContext(AuthContext);
  const [error, setError] = useState({ type: null, message: "" });

  const handleLogin = useCallback(
    async (user) => {
      try {
        const resp = await axios.post(ENDPOINT, user);
        setError({ type: "success", message: `datos correctos ` });
        setJWT(resp.data.token);
        window.localStorage.setItem("jwt", resp.data.token);
        window.localStorage.setItem("teamId", JSON.stringify([]));
      } catch (error) {
        setError({ type: "danger", message: error.response.data.error });
        window.localStorage.removeItem("jwt");
      }
    },
    [setJWT]
  );
  const guestUser = useCallback(() => {
    const guest = "jnsjknskjsnkjsnkns12234";
    setError({ type: "success", message: `datos correctos ` });
    window.localStorage.setItem("teamId", JSON.stringify([]));
    window.localStorage.setItem("jwt", guest);
    setJWT(guest);
  }, [setJWT]);
  const logout = useCallback(() => {
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("teamId");
    window.localStorage.removeItem("teamData");
    setJWT(null);
  }, [setJWT]);
  return {
    isLogged: Boolean(jwt),
    handleLogin,
    error,
    logout,
    guestUser,
  };
};

export default useUser;
