var total = 0;

for (var i = 0; i<1=000; i++){
  if (i%3===0 || i%5===0) {
    total += i;
  }
}

alert('The total of all natural numbers that are also multiples of 3 and 5 is: '+total);
