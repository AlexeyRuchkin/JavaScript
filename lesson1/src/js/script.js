
let money = prompt ("Ваш бюджет на месяц?"),
	time = prompt ("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
	

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: [],
	income: {},
	savings: false,
}

let i;
 for (i = 0; i < 1; i++) {

	appData.expenses [i] = prompt ("Введите обязательную статью расходов в этом месяце");
	appData.expenses [++i] = prompt ("Во сколько обойдется?");	
}

let oneDay = money/30;
alert("Бюджет на один день"+oneDay);
console.log(appData);






