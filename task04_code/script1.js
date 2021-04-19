var rq=new XMLHttpRequest();
rq.open('GET','https://restcountries.eu/rest/v2/all',true);
rq.send();
rq.onload=function(){
    var data=JSON.parse(this.response);

//Get all the countries from Asia continent/region using Filter function.
    var countries=data.filter((elem)=>{
        return elem.region=="Asia";
    })
    console.log("ASIAN REGIONS:");    
    console.log(countries);


//Get all the countries with population of less than 2 lacs using Filter function.
var pop=data.filter((no)=>{
    return no.population<200000;
})
console.log("POPULATION LESS THAN 2LACS:")
    console.log(pop);


 //Print the following details name, capital, flag using forEach function.
 console.log("NAME, CAPITAL & FLAG:")
 data.forEach(c => {
        console.log(c.name);
        console.log("Capital: "+c.capital);
        console.log("Flag: "+c.flag+"\n\n");
        
     });

 //Print the total population of countries using reduce function.
 let iv=0; 
 var reduced_population=data.reduce((accumlator,cv)=>{
     return accumlator+cv.population;
 },iv);
 console.log("TOTAL POPULATION OF COUNTRIES:");
 console.log(reduced_population);


 //Print the country which use US Dollars as currency.
 console.log("\nCOUNTIRES WITH US DOLLARS AS THEIR CURRENCY:");
 for(let key in data)
 {
     if(data[key].currencies[0].code=="USD")
     {
         console.log(data[key].name);
     }
 }

//     for(var i in country)
//     {
//         try{
//             var cname=country[i].name;
//             var latlong=country[i].latlng;
//             if(latlong==0) throw new Error("Lattitude and long not found");
//             weatherdata(cname,...latlong);
//         }
//         catch(e){
//             console.log("Invalid corrdinates"+cname);


//         }

//     }
// }
// var weatherdata=function(name,lat,lng)
// {
//     var URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9436e0f38b07c5fb5103a391d1af3053`
//     var request=new XMLHttpRequest();
//     request.open('GET',URL,true);
//     request.send();
//     request.onload=function(){
//         var data=JSON.parse(this.response);
//         // data.forEach(c => {
//         //     (console.log(c.name))
//         // });

//         console.log(`${name}:${data.main.temp}`);
//     }
}

