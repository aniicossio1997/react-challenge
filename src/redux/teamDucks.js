import { TeamService } from '../services/TeamService';

//constantes
const initialData = [];
//types

const GET_TEAM_SUCCESS = 'GET_TEAM_SUCCESS';
const DELETE_HERO_SUCCESS = 'DELETE_HERO_SUCCESS';
const ADD_HERO_SUCCESS = 'ADD_HERO_SUCCESS';

//reducer
export default function teamReducer(state = initialData, action) {
  switch (action.type) {
    case GET_TEAM_SUCCESS:
      return action.payload;
    case DELETE_HERO_SUCCESS:
      return state.filter((hero) => hero.id !== action.payload);
    case ADD_HERO_SUCCESS:
      return [...state, action.payload]
    default:
      return state;
  }
}
//acciones
export const getTeamAction = () => async (dispatch) => {
  try {
    const team = await TeamService.retrieveTeam();
    console.log(team);
    dispatch({
      type: GET_TEAM_SUCCESS,
      payload: team,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteHeroAction = (id) => ({
  type: DELETE_HERO_SUCCESS,
  payload: id,
});

export const addHeroAction = (hero) => ({
  type: ADD_HERO_SUCCESS,
  payload: hero,
});
