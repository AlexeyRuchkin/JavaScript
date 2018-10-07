
let money = +prompt ("Ваш бюджет на месяц?"),
	time = prompt ("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD"),
	num = 0;
	

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

 for (let i = 0; i < 2; i++) {
	let a = prompt ("Введите обязательную статью расходов в этом месяце"),
		b = prompt ("Во сколько обойдется?");
	
	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
		console.log ("done");
		appData.expenses[a] = b;
	} else {
		i = i -1 ;
	}

}

// while (num < 2)  {
// 	let a = prompt ("Введите обязательную статью расходов в этом месяце"),
// 		b = prompt ("Во сколько обойдется?");
	
// 		if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 			console.log ("done");
// 			appData.expenses[a] = b;
// 			num++;
// 		} 
	
// }

// do {
// 	let a = prompt ("Введите обязательную статью расходов в этом месяце"),
// 		b = prompt ("Во сколько обойдется?");
// 		num++;
	

// 	if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log ("done");
// 		appData.expenses[a] = b;
// 	}	
// }
// while (num < 2)

appData.money.PerDay = appData.budget / 30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200){
	console.log("Cредний уровень достатка");
} else if (appData.moneyPerDay > 2000){
	console.log("ВЫсокий уровень достатка");
} else {
	console.log("Произошла ошибка");
}


console.log(appData);






