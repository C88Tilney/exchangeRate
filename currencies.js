
//event listeners on page load
window.addEventListener("load", gbpRate, false);
window.addEventListener("load", start, false);

//GBP exchange rate on the load of page
function gbpRate() {
    var xmlhttp = new XMLHttpRequest();
    var gbpBaseRate = "http://api.fixer.io/latest?base=gbp";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gbp = JSON.parse(this.responseText);
            //console.log(gbp);
            
            var usd = gbp.rates.USD;
            var eur = gbp.rates.EUR;
            //console.log(eur);
            document.getElementById("dollar").innerHTML = usd +" USD";
            document.getElementById("euro").innerHTML = eur + " EUR";
        }
    };
    xmlhttp.open("GET", gbpBaseRate, true);
    xmlhttp.send();
};

//User Input to start function

function start() {
    document.getElementById("submit").addEventListener("click", loadData, false);
    ;
}

function loadData() {
    var toCurr = document.getElementById("to").value;
    var fromAmount = parseInt(document.getElementById("fromAmount").value);
    //console.log(fromAmount);

    var fromCurr = document.getElementById("from").value;
    //console.log(fromCurr);
    //console.log(toCurr);

    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.fixer.io/latest?base=" + fromCurr;

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            //console.log(myArr);
            myFunction(myArr);
        }

        function myFunction(arr) {
            var dis = myArr.rates[toCurr];
            //console.log(dis);
            var calculation = dis * fromAmount;
            var UserUsd = myArr.rates.USD;
            var UserEur = myArr.rates.EUR;
            var UserGbp = myArr.rates.GBP;
            //console.log(calculation);
            document.getElementById("toAmount").value = calculation;

            //other curreny rate
            document.getElementById("userChoice").innerHTML = "1 " + fromCurr;
            
            //console.log(UserEur);
            
            if( fromCurr == "USD" ) {
                document.getElementById("userUs").innerHTML =  UserGbp + " GBP";
                document.getElementById("userEur").innerHTML = UserEur + " EUR";
            }
            else if ( fromCurr == "EUR") {
                document.getElementById("userEur").innerHTML = UserGbp +" GBP";
                document.getElementById("userUs").innerHTML = UserUsd + " USD";
            }
            else {
            document.getElementById("userUs").innerHTML = UserUsd + " USD";
            document.getElementById("userEur").innerHTML = UserEur + " EUR";
            }
        };
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    appear();

  
};

/* hide the div table until onclick event*/
$(function() {
    $('i').hide();
});

function appear() {  
$('body').on("click", function() {
    $('i').show();
});
};

