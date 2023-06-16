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
    console.log('deposit clicked');
})