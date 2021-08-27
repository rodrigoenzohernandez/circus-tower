let lis = [];
let tower = [];
let counter = 0;

function getLargestTower(people) {
  //order by ht incresing
  people.sort((a, b) => a.ht - b.ht);

  //Implement LIS algorithm in unsorted array of wt
  lis = createInitialLisArray(people.length);

  //Get maxValue of LIS array
  maxValue = fillLisAndGetMaxValue(people, lis);

  //getLargestTower
  counter = maxValue;
  //Start with the last element of the lis array, and decrease.
  for (i = lis.length - 1; i >= 0; i--) {
    if (i == lis.length - 1) {
      //add the largest value to the last position of the Tower and decrease counter on 1
      addPersonToTower(people[i]);
    } else if (lis[i] == counter) {
      //keep moving left unless we find a value that is lower that one value
      addPersonToTower(people[i]);
    }
  }
  return tower;
}

function createInitialLisArray(length) {
  for (i = 0; i < length; i++) lis.push(1);
  return lis;
}

function fillLisAndGetMaxValue(people, lis) {
  let maxValue = lis[0];

  for (i = 0; i < people.length; i++) {
    for (j = 0; j < i; j++) {
      //Compare actual wt against wt of previous elements. If its bigger and the lis[i] is lower, update lis[i] incresing on 1 lis[j]
      if (people[i].wt > people[j].wt && lis[i] <= lis[j]) {
        lis[i] = lis[j] + 1;
        //Compare and keep max value
        if (maxValue < lis[i]) maxValue = lis[i];
      }
    }
  }
  return maxValue;
}

function addPersonToTower(person) {
  tower.unshift(person);
  counter--;
}

console.log(
  getLargestTower([
    { ht: 65, wt: 100 },
    { ht: 70, wt: 150 },
    { ht: 71, wt: 145 },
    { ht: 56, wt: 90 },
    { ht: 75, wt: 190 },
    { ht: 60, wt: 95 },
    { ht: 68, wt: 110 },
    { ht: 72, wt: 146 },
  ])
);
