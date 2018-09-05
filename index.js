
function dwarfRollCall(dwarves) {
  for (var i = 0; i <dwarves.length; i++) {
    dwarves.push(" " + (i+1) + ". " + dwarves[i]);}
    return dwarves;
  }


function summonCaptainPlanet(planeteerCalls){
  for(var i= 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i].toUpperCase();
    planeteerCalls[i] +="!";
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i=0; i< words.length; i++) {
    if (words[i].length > 4) {
      return true }
      else {
        return false;
      }
    }
  }

function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return foods[i];
    }
    else if (foods[i] === "gouda") {
      return foods[i];
    }
    else if (foods[i] === "camembert") {
      return foods[i];
    }
    else {
      if (i === foods.length - 1) {
        return ("no cheese");
      }
    }
  }
}