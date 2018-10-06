
let money = prompt ("Ваш бюджет на месяц?"),
	time = prompt ("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
	

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

 for (let i = 0; i < 1; i++) {
	let a = prompt ("Введите обязательную статью расходов в этом месяце"),
		b = prompt ("Во сколько обойдется?");	
	
	appData.expenses[a] = b;
}

let oneDay = money/30;
alert("Бюджет на один день "+oneDay);
console.log(appData);






