import { TeamService } from "../services/TeamService";

//constantes
const initialData = []
//types

const GET_TEAM_SUCCESS = "GET_TEAM_SUCCESS";

//reducer
export default function teamReducer(state = initialData, action) {
  console.log("gato", action?.type)
  console.log(action?.payload)
  switch (action.type) {
    case GET_TEAM_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
//acciones
export  const getTeamAction = () => async (dispatch) => {
  try {
    const team =  await TeamService.retrieveTeam()
    console.log(team)
    dispatch({
      type: GET_TEAM_SUCCESS,
      payload: team,
    });
  } catch (error) {
    console.log(error);
  }
};

