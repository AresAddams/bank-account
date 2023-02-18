document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmount = withdrawField.value;
    const withdrawAmount = parseFloat(newwithdrawAmount);

    //set withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const currentWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //update balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalText = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const currentBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //clear withdraw input field
    withdrawField.value = '';


});