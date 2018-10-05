module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0)return 0;
  let arr = array;
  arr.sort(function(a, b) {
    return a - b;
  });
  let resultArr=[];
  let result=1;
  for(let i=0;i<arr.length;i++){
    if(arr[i+1]-arr[i]==1){
      result++;
    }else{
      resultArr.push(result);
      result=1;
    }
  }
  resultArr.sort(function(a, b){
    return a - b;
  });
  return resultArr[resultArr.length-1];
};
