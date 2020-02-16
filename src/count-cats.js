module.exports = function countCats( matrix ) {
 	var answer = 0;
 	matrix.forEach(item => {
 		item.forEach(i => {
 			if(i === "^^") {
 				answer++;
 			}
 		})
 	})
 	return answer;
};
