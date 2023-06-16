//login button even handler.......
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("loginArea");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//deposit button even handler........
const depositBtn = document.getElementById("depositbutton");
depositBtn.addEventListener('click',function(){
    const depositNum = getInputNumber("depositAmount");
    updateSpanTest("currentDeposit",depositNum);
    updateSpanTest("currentBalance",depositNum);
    document.getElementById("depositAmount").value = "";

})

//withdraw button even handler........
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click',function(){
    const currentWithdraw = document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNum = parseFloat(currentWithdraw);
    const withdrawAmountNum = getInputNumber("withdrawAmount");
    const totalCurrentWithdraw = currentWithdrawNum + withdrawAmountNum;
    document.getElementById("currentWithdraw").innerText = totalCurrentWithdraw;
    document.getElementById("withdrawAmount").value = "";

    // const currentBalanceAmount = document.getElementById("currentBalance");
    // const currentBalanceAmountNum = parseFloat(currentBalanceAmount);
    // const totalBalanceAmount = currentBalanceAmountNum - withdrawAmountNum;
    // document.getElementById("currentBalance").innerText = totalBalanceAmount;
})
//get input for deposit and withdraw
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}
//function for update deposit,balance
function updateSpanTest(id,depositNum){
    const current = document.getElementById(id).innerText;
    const currentValue = parseFloat(current);
    const totalAmount = currentValue + depositNum;
    document.getElementById(id).innerText = totalAmount;
}