// Lines 2-29 were me working through the first question. I wanted to keep my scratch notes and stuff so I could look back on what I got wrong and why it didn't work.
//	function countDown(num) {
// 	while (num > 0) {
// 		setInterval(console.log(num--), 1000);
// 	}
// }

// function countDown(num) {
// 	if (num > 0) {
// 		let newNum = num--;
// 		setTimeout(console.log(newNum), 1000);
// 		return countDown(newNum);
// 	}
// }

// function countDown(num) {
// 	let timer = function() {
// 		if (num === 0) {
// 			console.log('DONE!');
// 		} else {
// 			while (num > 0) {
// 				console.log(num);
// 				num--;
// 			}
// 		}
// 	};
// 	setInterval(timer, 1000);
// 	clearInterval(id);
// }

//countdown

function countDown(num) {
	const id = setInterval(() => {
		if (num > 0) {
			console.log(num);
			num--;
		} else if (num === 0) {
			console.log('DONE!');
			clearInterval(id);
		}
	}, 1000);
}

// randomGame

function randomGame() {
	let counter = 0;
	let num = 0;
	const id = setInterval(() => {
		let num = Math.random();
		if (num > 0.75) {
			counter++;
			clearInterval(id);
			console.log(counter);
		} else {
			counter++;
		}
	}, 1000);
}
