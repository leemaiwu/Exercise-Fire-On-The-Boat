const fireFight = (s) => s.replaceAll('Fire', '~~')

console.log(fireFight('Boat Rudder Mast Boat Hull Water Fire Boat')) // 'Boat Rudder Mast Boat Hull Water ~~ Boat'
console.log(fireFight('Mast Deck Engine Water Fire')) // 'Mast Deck Engine Water ~~'
console.log(fireFight('Mast Fire Fire Water Fire')) // 'Mast ~~ ~~ Water ~~'