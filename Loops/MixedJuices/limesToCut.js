export function limesToCut(wedgesNeeded, limes) {
  //broj iseckanih limeta
    let limesCut = 0;  
  
  //sve dok ima wedgeova i ima limeta
  while (wedgesNeeded > 0 && limes.length > 0) {
    //uzmi prvu limetu
      const lime = limes.shift();
    //odredi koliko wedgeova daje ta limeta;
    let wedgesFromThisLime;
    switch (lime) {
    case 'small':
      wedgesFromThisLime = 6;
      break;
    case 'medium':
      wedgesFromThisLime = 8;
      break;
    case 'large':
      wedgesFromThisLime = 10;
      break;
  }
//oduzmi wedgeove koji su iseceni
    wedgesNeeded -= wedgesFromThisLime;
    //povecaj broj limeta
    limesCut++;
  }
  //vrati rezultat
  return limesCut;
}