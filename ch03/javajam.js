let cupAmt;

document.getElementById("mySubmit").onclick = function () {
    cupAmt = document.getElementById("myCupAmt").value;

    document.getElementById("myResult").textContent = "Price of the cup: $" + cupAmt;
};