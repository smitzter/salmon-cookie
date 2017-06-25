'use strict';

//form add inputs
//name of store
//min custy
//max custy

function StoreProfile(name, min, max, avgCookieSale) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookieSale = avgCookieSale;
};

function AvgCustPerHour(min, max) {
  return Math.floor(Math.random() *
  (max - min + 1) + min);
}

var pike = new StoreProfile('1st and Pike', 23, 65, 6.3);
console.log(pike.min);
var seaTacAirport = new StoreProfile('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);
var seattleCenter = new StoreProfile('Seattle Center', 23, 65, 6.3);
console.log(seattleCenter);
var capitolHill = new StoreProfile('Capitol Hill', 23, 65, 6.3);
console.log(capitolHill);
var alki = new StoreProfile('Alki', 23, 65, 6.3);
console.log(alki);

StoreProfile.prototype.render = function() {
  var parentElement = document.createElement('storeProfiles');
  var article = document.createElement('article');
  parentElement.appendChild('article');
  var table = document.createElement('table');
  var row1 = document.createElement('tr');
  var row2 = document.createElement('tr');
  var row3 = document.createElement('tr');
  var row4 = document.createElement('tr');
  var row5 = document.createElement('tr');
console.log('work');
  var currentHour;

for (var i = 6; i < 20; i++) {
  console.log('anything');
    if (i < 12) {
      currentHour = i + 'am';
    } else if (i == 12) {
      currentHour = i + 'pm';
    } else {
      currentHour = (i - 12) + 'pm';
    }
  var hour = document.createElement('td');
  console.log(currentHour);
  hour.textContent = currentHour;
  row1.appendChild(hour);
    };
table.appendChild(row1);
article.appendChild(table);
var sales, totalSales;
//keep track of what row
//two for loops, the first keeps track of what row we are creating
//create the row inside the first One
//this is the second for loop inside of the other loop that I need to create
for (var j = 0; j < 14; j++) {
  function SalesPerHour(AvgCustPerHour, avgCookieSale) {
    sales = Math.floor(AvgCustPerHour * avgCookieSale);
    var perHour = document.createElement('td');
    perHour.textContent = sales;
  }
}
totalSales += sales;
var td15 = document.createElement('td');
td15.textContent = totalSales;

// row1.appendChild(th1);
// row1.appendChild(th2);
// row1.appendChild(th3);
// row1.appendChild(th4);
// row1.appendChild(th5);
// row1.appendChild(th6);
// row1.appendChild(th7);
// row1.appendChild(th8);
// row1.appendChild(th9);
// row1.appendChild(th10);
// row1.appendChild(th11);
// row1.appendChild(th12);
// row1.appendChild(th13);
// row1.appendChild(th14);
// row1.appendChild(th15);
// row1.appendChild(th16);
//
// row2.appendChild(td1);
// row2.appendChild(td2);
// row2.appendChild(td3);
//
// table.appendChild(row1);
// table.appendChild(row2);
// article.appendChild(table);
};
