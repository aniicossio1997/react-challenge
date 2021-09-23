import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHeroAction, deleteHeroAction, getTeamAction } from '../redux/teamDucks';
import { TeamService } from '../services/TeamService';
const useTeam = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const team = useSelector((s) => s.team);

  const deleteHero = (id) => {
    setIsLoading(true);
    if (TeamService.deleteTeamHero(id)) {
      dispatch(deleteHeroAction(id));
    }
    setIsLoading(false);
  };

  const addHero = (hero) => {
    const result = TeamService.addHeroToTeam(hero, team);
    if (result.typeClass === 'success') {
      dispatch(addHeroAction(hero));
    }
    return result;
  };

  useEffect(() => {
    dispatch(getTeamAction());
    setIsLoading(false);
  }, [dispatch, setIsLoading]);

  return { team, isLoading, deleteHero, addHero };
};

export default useTeam;
