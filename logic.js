document.getElementById("submit").addEventListener('click', function() {
    var table = document.getElementById('taxtable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);

    var amount = parseFloat(document.getElementById("taxinput").value);
    var tax ;
    var excedingamount ;
    var incomenotice;

    if(amount <= 600000){
        tax = 0;
        excedingamount= 600000;
        incomenotice = "Taxable salary income does not exceed Rs. 600,000"
    }
    else if (amount <= 1200000){
        tax =0.05;
        excedingamount= 610000;
        incomenotice = "Taxable salary income exceeds Rs. 1,200,000"
    }
    else if (amount <= 1800000){
        tax =0.10;
        excedingamount= 1210000;
        incomenotice = "Taxable salary income exceeds Rs. 1,800,000"
    }
    else if (amount <= 2400000){
        tax =0.15;
        excedingamount= 1810000;
        incomenotice = "Taxable salary income exceeds Rs. 2,400,000"
    }
    else if (amount > 2410000){
        tax =0.15;
        excedingamount= 2410000;
        incomenotice = "Taxable salary income exceeds Rs. 2,410,000"
    }

    var result = calculateTax(amount, tax, excedingamount);

    cell1.innerHTML= incomenotice;
    cell2.innerHTML = tax*100+"%";
    cell3.innerHTML = result.monthlyIncome.toFixed(2)
    cell4.innerHTML=amount
    cell5.innerHTML= result.monthlyTaxRate.toFixed(2);
    cell6.innerHTML= result.annualTaxRate.toFixed(2);
});

function calculateTax(income, tax, exceedingAmount) {
    var taxableIncome = income - exceedingAmount;
    var annualTaxRate = taxableIncome * tax;
    var monthlyIncome = income / 12;
    var monthlyTaxRate = annualTaxRate / 12;

    return {
        annualTaxRate: annualTaxRate,
        monthlyIncome: monthlyIncome,
        monthlyTaxRate: monthlyTaxRate
    };
}