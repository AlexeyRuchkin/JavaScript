
let money = prompt ("Ваш бюджет на месяц?"),
	time = prompt ("Введите дату в формате YYYY-MM-DD"),
	expenses = {};

let appData = {
	budget: money,
	timeData: time,
	expenses,
	optionalExpenses: [],
	income: {},
	savings: false,
}

for (i = 0; i < 2; i++) {

	expenses [i] = prompt ("Введите обязательную статью расходов в этом месяце");
	optionalExpenses = prompt ("Во сколько обойдется?");
}

oneDay = money/30;
alert("Бюджет на один день"+oneDay);
console.log(appData);






