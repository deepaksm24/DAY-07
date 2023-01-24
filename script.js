// DAY - 07 - TASK

// Question 2 and 3 

var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {

var result = JSON.parse(req.response);
//console.log(result);

let result1 = result.filter(result => result.continents[0] =="Asia");
let result2 = result.filter(result => result.population<200000);
//console.log(result1);   // Asia countries
//console.log(result2);    // countries population < 200000


const totalpopulation = result.reduce((a, c) => a + c.population,0);
console.log("Total countries population:", totalpopulation);

console.log("Asia Countries:")
result1.forEach(element => console.log("Name:",element.name.common,"|| Capital: ",element.capital,"|| Flag: ",element.flags.png));


const totalpopulation1 = result1.reduce((a, c) => a + c.population,0);
console.log("Total countries population in Asia:", totalpopulation1);

//let result3 = result.filter(result => result.continents[0] =="Asia");


let result5 = result.filter((country) =>  {
    for (let key in country.currencies) {
        if(country.currencies[key].name === "United States dollar"){
          return country
      }
    }
    })
    console.log("Countries using US Dollar")
    console.log(result5);
    result5.forEach(element => console.log("Name:",element.name.common,"|| Currency: ",element.currencies));


    console.log("Countries population < 200000: ",result2);    // countries population < 200000
};