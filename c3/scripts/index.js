// Store the wallet amount to your local storage with key "amount"
function add(){

  let amount= Number(document.getElementById("wallet").innerText) + Number(document.getElementById("amount").value)
 
localStorage.setItem("amount",JSON.stringify(amount))
window.location.reload()
}

document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem('amount')||0)