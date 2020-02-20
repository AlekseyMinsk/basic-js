module.exports = function transform(arr) {
	if(!Array.isArray(arr)) {
		throw Error();
	} 

  var answer = [];
  for(var i = 0; i < arr.length; ++i) {
		switch (arr[i]) {	 
		  case "--discard-next":
		    if(i < arr.length - 1) {
		  		i++;
		    }
		    break;
		  case "--discard-prev":
		    if(answer.length) {
		    	answer.pop();
		    }
		    break;
		  case "--double-next":
		    if(i < arr.length - 1) {
		    	answer.push(arr[i + 1]);
		    }
		    break;
		  case "--double-prev":
		    if(i > 0) {
		    	answer.push(arr[i - 1]);
		    }
		    break;
		    default:
	  			answer.push(arr[i]);
		}
  }
  return answer;
};
