// ¿En tu páis de origen es normal dejar propina?
let calculate = document.querySelector("#calculate");
let billAmountInput = document.querySelector("#bill-amount");
let percentageTipInput = document.querySelector("#percentage-tip");
let tipAmount = document.querySelector("#tip-amount");
let total = document.querySelector("#total");


calculate.addEventListener("click", function () {

	let billAmount = +billAmountInput.value;
	let percentageTip = +percentageTipInput.value;
	let calculatedTip = billAmount * (percentageTip / 100);
	tipAmount.value = calculatedTip.toFixed(2);

	let totalAmount = (billAmount + calculatedTip);
	total.value = totalAmount.toFixed(2);


})