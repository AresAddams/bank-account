document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    console.log(depositAmount);
    //clear the deposit input field
    depositField.value = '';

    if (isNaN(depositAmount) || depositAmount == '') {
        alert('Please enter a valid number');
        return;
    }

    //step 3 get the current deposit total
    //for non-input (element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalText = depositTotalElement.innerText;
    depositTotalElement.innerText = parseFloat(depositTotalText) + parseFloat(depositAmount);

    //update account balance
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalText = balanceTotalElement.innerText;
    balanceTotalElement.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmount);





});