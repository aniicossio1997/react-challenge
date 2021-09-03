
class Hero {

  static deleteString(str) {

    let resultado = str.replace(/[A-Za-z/s]/g, '')
    if (resultado===""){
      return 0
    }
    return parseInt(resultado)
  }


  static averageWeight = (team) => {
    let weight = team.reduce(function (acc, hero) {
      return acc + (Hero.deleteString(hero.appearance.weight[1]));
    }, 0);

    return((weight / team.length).toFixed(2))
  }
  static averageHeight = (team) => {
    let height = team.reduce(function (acc, hero) {
      return acc + parseInt(Hero.deleteString(hero.appearance.height[1]));
    }, 0);
    return((height / team.length).toFixed(2))
  }

  static arrayPower = (team) => {
    let powerstats = ([
      {name:'intelligence',value: 0},
      {name:'strength',value: 0},
      {name:'speed',value: 0},
      {name:'durability', value: 0},
      {name:'power',value: 0},
      {name:'combat',value: 0},
    ]);

    powerstats.forEach(function(item) {
      
    item.value=team.reduce(function (acc, hero) {
        return (acc) + Hero.deleteString((hero.powerstats[`${item.name}`]));
      }, 0);
    });

    return(powerstats)
  }
  static sortPower = (team) => {
    const array = Hero.arrayPower(team)
    const newArray=array.sort(function(a, b){return parseInt(b.value) - parseInt(a.value)})
    return (newArray);
  }


}

export default Hero
