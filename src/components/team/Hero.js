
class Hero {

  static deleteString(str) {

    let result = str.replace(/[A-Za-z/s]/g, '')
    if (result==="" || isNaN(result) ){
      return 0
    }
    return parseInt(result)
  }

  static averageWeight = (team) => {
    let weight=0
    weight = team.reduce(function (acc, hero) {
      return acc + parseInt(Hero.deleteString(hero.appearance.weight[1]));
    }, 0);

    return((weight / team.length).toFixed(2))
  }
  static averageHeight = (team) => {
    let height =0
     height=team.reduce(function (acc, hero) {
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
