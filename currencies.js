//ADD EVENT LISTENERS
window.addEventListener("load", start, false);

function start() {
    document.getElementById("submit").addEventListener("click", loadData, false);
}

function loadData() {
    var toCurr = document.getElementById("to").value;
    var fromAmount = parseInt(document.getElementById("fromAmount").value);
    console.log(fromAmount);

    var fromCurr = document.getElementById("from").value;
    console.log(fromCurr);
    console.log(toCurr);

    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.fixer.io/latest?base=" + fromCurr;

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            console.log(myArr);
            myFunction(myArr);
        }

        function myFunction(arr) {
            var dis = myArr.rates[toCurr];
            console.log(dis);
            var calculation = dis * fromAmount;
            console.log(calculation);


            document.getElementById("demo").innerHTML = calculation;
        };
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


};
