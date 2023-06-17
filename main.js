//login button even handler.......
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById("loginArea");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//login validation check.......

  
  

  

//deposit button even handler........
const depositBtn = document.getElementById("depositbutton");
depositBtn.addEventListener('click',function(){
    const depositNum = getInputNumber("depositAmount");
    updateSpanText("currentDeposit",depositNum);
    updateSpanText("currentBalance",depositNum);
    document.getElementById("depositAmount").value = "";

})

//withdraw button even handler........
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener('click',function(){
    const withdrawAmountNum = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw",withdrawAmountNum);
    updateSpanText("currentBalance",-1 * withdrawAmountNum)

    document.getElementById("withdrawAmount").value = "";

})
//get input for deposit and withdraw
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}
//function for update deposit,balance
function updateSpanText(id,depositNum){
    const current = document.getElementById(id).innerText;
    const currentValue = parseFloat(current);
    const totalAmount = currentValue + depositNum;
    document.getElementById(id).innerText = totalAmount;
}