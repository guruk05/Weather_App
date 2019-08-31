const cityList = [
    { name: "Chennai", state: "Tamil nadu",climate:"Hot", degree: 23},
    { name: "Bangalore", state:"Karnataka",climate:"cloudy", degree: 27},
    { name: "Hyderabad", state: "Telengana",climate:"clear", degree: 25},
    { name: "Thiruvanandhapuram", state: "Kerala",climate:"Rainy", degree: 20},
    { name: "panaji", state: "Goa ",climate:"Rainy", degree: 18},
    { name: "New Delhi", state: "Delhi",climate:"Hot", degree: 30},
    { name: "kolkata", state: "West Bengal",climate:"Cloudy", degree: 32},
    { name: "Lucknow", state: "Uttar pradesh",climate:"Hot", degree: 34},
    { name: "Patna", state: "Bihar",climate:"Clear", degree: 26}
];


function updateWeather() 
{
    let currentCity = document.getElementById("cityName").value;
    var cityname = cityList.filter(city => 
        { 
        if(city.name == currentCity ) 
        {
            document.getElementsByClassName("city")[0].innerHTML = city.name;
            document.getElementsByClassName("state")[0].innerHTML = city.state;
            document.getElementsByClassName("weather")[0].innerHTML = city.climate;
            document.getElementsByClassName("dsDegree")[0].innerHTML = city.degree;
                    }
    });
}

