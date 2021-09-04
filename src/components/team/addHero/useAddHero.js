import React, {useCallback} from 'react'
import Hero from '../Hero'
const maxHero=6
const useAddHero = () => {
const handleAdd = (hero, setMsj) => {
  const arrayHeroId = JSON.parse(window.localStorage.getItem('teamId'))
  setMsj(null)
  if (!! arrayHeroId) {
    if (Hero.isLimitBadAndGood(hero.biography.alignment)) {
      setMsj(
				{typeClass: 'danger',
				title: 'Error Limit of alignment',
				body: `Remember that the team has a maximum of three heroes with good and bad alignment. You can remove a hero with bad or good alignment to continue`})
      return false
    }
    if (arrayHeroId.length >= maxHero) {
      setMsj({typeClass: 'danger', title: 'Error size exceeded', body: `Remember that the team can only have six heroes, to continue you can remove a hero`})
      return false;
    }
    const continueAdd = arrayHeroId.filter(id => parseInt(id) === parseInt(hero.id));
    if ((continueAdd.length) >= 1) {
      setMsj({typeClass: 'danger', title: 'Error Hero exist', body: `heroes cannot be repeated`})
      return false;
    }

    arrayHeroId.push(parseInt(hero.id))
    window.localStorage.setItem('teamId', JSON.stringify(arrayHeroId))
    const arrayHeroData = JSON.parse(window.localStorage.getItem('teamData'))
    arrayHeroData.push(hero)
    window.localStorage.setItem('teamData', JSON.stringify(arrayHeroData))
    setMsj({typeClass: 'success', title: 'Exito', body: `Se ha agreado el Heroe al equipo ${
        hero.name
      }`})


  }

  return false
}
return({handleAdd})}
export default useAddHero
