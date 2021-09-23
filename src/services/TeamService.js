import SuperHeroAPI from '../api/SuperHeroAPI';

class TeamService {
  static MAX_HEROES = 6;
  
  static getTeamFromStorage() {
    try {
      return JSON.parse(localStorage.getItem('teamId'));
    } catch (error) {
      return [];
    }
  }
  //devuelve el equipo
  static async retrieveTeam(callback) {
    let promises = [];
    const arrayData = [];
    const arrayIDs = JSON.parse(window.localStorage.getItem('teamId'));
    if (arrayIDs.length === 0) {
      return [];
    }
    for (let id of arrayIDs) {
      promises.push(
        await SuperHeroAPI.getByID(id)
          .then((response) => {
            arrayData.push(response.data);
          })
          .catch((e) => {
            console.log(e);
          })
      );
    }
    await Promise.all(promises).then(() => {
      window.localStorage.setItem('teamData', JSON.stringify(arrayData));
    });

    return arrayData;
  }
  static deleteTeamHero(id) {
    //collecion de IDs del los heroes
    let teamIDs = this.getTeamFromStorage();
    teamIDs = teamIDs.filter((item) => parseInt(item) !== parseInt(id));
    localStorage.setItem('teamId', JSON.stringify(teamIDs));
    return true;
  }
  static addHeroToTeam(hero, team) {
    const teamIds = this.getTeamFromStorage();

    if (this.isLimitBadAndGood(hero.biography.alignment, team)) {
      return {
        typeClass: 'danger',
        title: 'Error Limit of alignment',
        body: `Remember that the team has a maximum of three heroes with good and bad alignment. You can remove a hero with bad or good alignment to continue`,
      };
    }
    if (teamIds.length >= this.MAX_HEROES) {
      return {
        typeClass: 'danger',
        title: 'Error size exceeded',
        body: `Remember that the team can only have six heroes, to continue you can remove a hero`,
      };
    }

    console.log(teamIds, hero.id,teamIds.includes(parseInt(hero.id)))
    if (teamIds.includes(parseInt(hero.id))) {
      return {
        typeClass: 'danger',
        title: 'Error Hero exist',
        body: `heroes cannot be repeated`,
      };
    }

    teamIds.push(parseInt(hero.id));
    window.localStorage.setItem('teamId', JSON.stringify(teamIds));
    return {
      typeClass: 'success',
      title: 'Success!',
      body: `${hero.name} was added to your team`,
    };
  }

  static isLimitBadAndGood(alignment, team) {
    let arrayBad = team.filter((hero) => hero.biography.alignment === 'bad');
    let arrayGood = team.filter((hero) => hero.biography.alignment === 'good');
    console.log(arrayBad.length >= 3 && alignment === 'bad');
    if (
      (arrayBad.length >= 3 && alignment === 'bad') ||
      (arrayGood.length >= 3 && alignment === 'good')
    ) {
      return true;
    }
    return false;
  }
}
export { TeamService };
