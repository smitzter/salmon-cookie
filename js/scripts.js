
//min cust per hour
//max cust per hour
//ave # of cookies per cust

//be able to add and remove locations from daily projections report
//easily modify input #s based on day of the week, special events etc
var pike = {
name: 'pike',
getCookies: function(min, max) {
    return Math.floor(Math.random() *
    (max - min + 1) + min);
    }
};

var seaTacAirport = {
name: 'SeaTacAirport',
function getCookies(min, max) {
    return Math.floor(Math.random() *
    (max - min + 1) + min);
    return seaTacAirport.getCookies
    }
};

var foo = {
0: {
my: 'obj'
}
};

var key = 27;
console.log(foo[key]);

function randomAge(min, max) {
return Math.floor(Math.random() *
(max - min + 1) + min);
}

var parentElement = document.getElementById('kittenProfiles');

var article = document.createElement('article');
parentElement.appendChild(element);

//comment for problemsolving
var h2 = document.createElement('h2');
h2.textContent = pike.name;
article.appendChild(h2);

var p = document.createElement('p');
p.textContent = '1st and Pike: ' + pike.getCookies;
article.appendChild(p);

var ul = document. createElement('ul');
article.appendChild(p);

for (var = i = 0; i< 16; i++) {
var li = document.crateElement('li');
li.textContent = pike.getCookies[i];
ul.appendChild(li);
}

// var img = document.createElement('img');
// img.setAttribute('src', 'images/' + frankie.name + ''.jpeg');
// img.setAttribute('alt', 'cute picture pf ' + frankie.name + ', who is an orange cat.');
// article.appendChild(img);
