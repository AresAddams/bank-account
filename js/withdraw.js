document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-field');
    const withDrawAmountString = withDrawField.value;
    const withDrawAmountNumber = parseFloat(withDrawAmountString);
    console.log(withDrawAmountNumber);
    withDrawField.value = '';
    if (isNaN(withDrawAmountNumber) || withDrawAmountNumber == '') {
        alert('Please enter a valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);




    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalText = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);




    if (withDrawAmountNumber > previousBalanceTotal) {
        alert('You can not withdraw more than what you have in your account');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + withDrawAmountNumber;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = previousBalanceTotal - withDrawAmountNumber;
    balanceTotalElement.innerText = currentBalanceTotal;


});