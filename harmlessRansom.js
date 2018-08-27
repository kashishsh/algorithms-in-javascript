function getOccuranceInArray(arr) {
  let obj = {};
  for(let i in arr) {
    if(obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    }
    else {
      obj[arr[i]]++;
    }
  }

  return obj;
}
function harmlessRansom(noteText, magazineText) {
  const noteOccurance = getOccuranceInArray(noteText.split(' '));
  const magazineOccurance = getOccuranceInArray(magazineText.split(' '));

  let isPossible = true;
  for(let i in noteOccurance){
    if(!magazineOccurance[i] || magazineOccurance[i] < noteOccurance[i]) {
      isPossible = false;
    }
  }

  return isPossible;
}


harmlessRansom('test message this', 'this is a test message');
