- Big O notation: It is used to classify, how scalable an algorithm or a function is. It allows us to estimate the worst case runtime of an algorithm or how long it takes for an algorithm to complete based on the input size. Big O informs us, how much slower an algorithm will run if its input size grows.

Constant runtime:
1. O(1)
    function log(arr) {   /////// Big O notation: "O(1)" : Runtime will not increase as the input size
      console.log(arr[0]); ///// changes.
      console.log(arr[1]);
    }

    log([1,2,3,4]);
    log([1,2,3,4,5,6,7,8,9]);

2. O(n):
  Run time increases proportionally as the input size increases.
  function logAll(arr) {
    for(var i in arr){
      console.log(arr[i]);
    }
  }

3. O(n^2): Exponentially runtime
  Run time increases exponentially as the input size increases
    function addAndLog(arr) {
      for(var i in arr){
        for(var j in arr){
          console.log(arr[i] + arr[j])
        }
      }
    }

4. O(log n): When runtime increases logrhythmically as the input size increases

