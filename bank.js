function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const inputAmountTex= inputField.value
    const amountValue = parseFloat(inputAmountTex)
    //clear input field
    inputField.value=''
    return amountValue;
}

function updtaeTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId)
    const totalText = totalElement.innerText
    const previousTotal = parseFloat(totalText)
    totalElement.innerText = amount + previousTotal
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    return previousBalanceTotal
}

function updateBalnace(amounts,isAdd){
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = getCurrentBalance()
    if(isAdd == true){
        balanceTotal.innerText = amounts + previousBalanceTotal
    }else {
        balanceTotal.innerText = previousBalanceTotal - amounts 
    }
}
//event Listener strat here
//handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit-input')
    if(depositAmount > 0){
        updtaeTotalField('deposit-total', depositAmount)
        updateBalnace(depositAmount,true)
    }else{
        alert('Please Enter positive value')
    }
    
})
//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updtaeTotalField('withdraw-total',withdrawAmount)
        updateBalnace(withdrawAmount,false)
    }
    if( withdrawAmount > currentBalance){
       console.log('you can not get more than you have')
    }
})