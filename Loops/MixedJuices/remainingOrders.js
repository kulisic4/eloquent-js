export function remainingOrders(timeLeft, orders) {
  do {
    //uzimam i uklanjam prvu porudzbinu iz liste
    const order = orders.shift();
    //proveravam koliko vremena je potrebno za pravljenje soka
    const time = timeToMixJuice(order);
    //oduzimam to vreme i vracam koliko je vremena ostalo
    timeLeft -= time;
  } while (timeLeft > 0 && orders.length >0); //proverava ima li vremena i porudzbina
  //vracam neodradjene porudzbine
  return orders;
}