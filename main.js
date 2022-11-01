let lab1 = [5,5,0,5,5,10,10];
let lab2 = [5,5,5,5,4,5,10];
let lab3 = [5,10,10,15];
let lab45 = [10,5,5,5,5,5,10,10,10,10,5];
let lab6 = [5,5,10,5,5,10];
let lab8 = [5,10,10,10,5];

let quiz1 = 40;

function get_sum(a) {
	sum = 0
	for (let i = 0; i<a.length; i=i+1) {
		sum += a[i];
	}
	return sum
}


function main (lab1, lab2, lab3, lab45, lab6, lab8, quiz1) {
	sum1 = get_sum(lab1)
	sum2 = get_sum(lab2)
	sum3 = get_sum(lab3)
	sum45 = get_sum(lab45)
	sum6 = get_sum(lab6)
	sum8 = get_sum(lab8)
	sums = sum1 + sum2+sum3+sum45+sum6+sum8
	quiz1 = 40
	total_score = sums*60/280 + quiz1;
	results = {sum1, sum2, sum3, sum45, sum6, sum8, quiz1, total_score}
	return results
}

obj = main (lab1, lab2, lab3, lab45, lab6, lab8, quiz1)

console.log(obj)