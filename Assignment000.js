
// function weather()
// {
//     var place="Tenkasi";
//     var xhr = new XMLHttpRequest();
//     var url = "https://api.weatherstack.com/current?access_key=00fc062a25f63c131b205cb1810a7e23&query="+place;
//     xhr.open("GET",url);

//     xhr.onload=function()
//     {
//         if(xhr.status==200)
//         {
//             var obj=JSON.parse(xhr.responseText);
//             var message=document.getElementById("box1");
//             message.innerText=obj.location.name+", "+obj.location.region+", "+obj.location.country;

//             var icon=document.getElementById("weatherImage");
//             // icon.innerHTML="&#x2600;";
//             // image.src=obj.current.weather_icons[0];

//             var temp=document.getElementById("temperature");
//             temp.innerText=obj.current.temperature+"\u00B0C";
//             if(temperature>=25)
//             {
//                 icon.innerText="&#x2600";
//             }
//             else if(temperature>=20 && temperature<25)
//             {
//                 icon.innerHTML="&#x1F324";
//             }
//             else if(temperature>=15 && temperature<20)
//             {
//                 icon.innerHTML="&#x2601";
//             }
//             else if(temperature>=10 && temperature<15)
//             {
//                 icon.innerHTML="&#x1F327";
//             }
//             else if(temperature>=5 && temperature<10)
//             {
//                 icon.innerHTML="&#x1F32B";
//             }
//             else if(temperature<1)
//             {
//                 icon.innerHTML="&#x2744";
//             }
//             console.log(obj);
//             console.log(obj.current.temperature);
//         }
//         else
//         {
//             console.log("Error");
//         }
//     }

//     xhr.send();
// }

// // weather();

// function weatherReport()
// {
//     var place=document.getElementById("place").value;
//     var xhr = new XMLHttpRequest();
//     var url = "https://api.weatherstack.com/current?access_key=00fc062a25f63c131b205cb1810a7e23&query="+place;
//     xhr.open("GET",url);

//     xhr.onload=function()
//     {
//         if(xhr.status==200)
//         {
//             var obj=JSON.parse(xhr.responseText);
//             var message=document.getElementById("box1");
//             message.innerText=obj.location.name+", "+obj.location.region+", "+obj.location.country;

//             var icon=document.getElementById("weatherImage");
//             var aboutImage=document.getElementById("about");
//             // icon.innerText="U+2600";
//             // image.src=obj.current.weather_icons[0];

//             var temp=document.getElementById("temperature");
//             var temperature=obj.current.temperature;
//             temp.innerText=temperature+"\u00B0C";
//             if(temperature>=25)
//             {
//                 icon.innerHTML="&#x2600"+"<br>";
//                 aboutImage.innerHTML="Sunny"
//             }
//             else if(temperature>=20 && temperature<25)
//             {
//                 icon.innerHTML="&#x1F324"+"<br>";
//                 aboutImage.innerHTML="Partly Cloudy"
//             }
//             else if(temperature>=15 && temperature<20)
//             {
//                 icon.innerHTML="&#x2601"+"<br>";
//                 aboutImage.innerHTML="Cloudy"
//             }
//             else if(temperature>=10 && temperature<15)
//             {
//                 icon.innerHTML="&#x1F327"+"<br>";
//                 aboutImage.innerHTML="Rainy";
//             }
//             else if(temperature>=5 && temperature<10)
//             {
//                 icon.innerHTML="&#x1F32B"+"<br>";
//                 aboutImage.innerHTML="Foggy"
//             }
//             else if(temperature<1)
//             {
//                 icon.innerHTML="&#x2744"+"<br>";
//                 aboutImage.innerHTML="Snowy";
//             }

//             var observation = document.getElementById("description");
//             observation.innerText = obj.current.weather_descriptions[0];
//             var observation = document.getElementById("observationTime");
//             observation.innerText = "Observed at: "+obj.current.observation_time;
//             var precip = document.getElementById("precip");
//             precip.innerText = "Precip: "+obj.current.precip+"mm";
//             var pressure = document.getElementById("pressure");
//             pressure.innerText = "Pressure"+obj.current.pressure+"mb";
//             var windSpeed = document.getElementById("wind");
//             windSpeed.innerText = "Wind: "+obj.current.wind_speed+"kmph"; 
//             console.log(obj);
//             console.log(obj.current.temperature);
//         }
//         else
//         {
//             console.log("Error");
//         }
//     }

//     xhr.send();
// }



function defaultWeatherReport(){
    
    var place = "Tenkasi";
    var xhr = new XMLHttpRequest();
    var array = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    xhr.open("GET",url);
    var count=0;

    
    var today = new Date();
    var now = today.toISOString().split("T")[0];
    var future = new Date(today);
    future.setDate(today.getDate() + 5);

    var date = future.toISOString().split("T");
    const key="489MV6Y8JR2QGR9VALQKSRLSB";
    var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + place + "/" + now + "/" + date[0] + "?key="+key;
    xhr.open("GET", url);


    xhr.onload = function () {
        if (xhr.status == 200) {
            var obj = JSON.parse(xhr.responseText);
            console.log(obj);
            
            var message = document.getElementById("box1");
            message.innerText = obj.resolvedAddress;
            console.log(obj.resolvedAddress);

            var icon = document.getElementById("image0");
            console.log(icon);
            var aboutImage = document.getElementById("about");


            var temp = document.getElementById("temperature");
            var fahrenhit = obj.days[0].temp;
            var celsius = (Number(fahrenhit) - 32) / 1.8;
            var temperature = Math.round(celsius);
            temp.innerText = temperature + "\u00B0C";


            if (temperature >= 25) {
                icon.innerHTML = "&#x2600" + "<br>";
            }
            else if (temperature >= 20 && temperature < 25) {
                icon.innerHTML = "&#x1F324" + "<br>";
            }
            else if (temperature >= 15 && temperature < 20) {
                icon.innerHTML = "&#xFE0F" + "<br>";
            }
            else if (temperature >= 10 && temperature < 15) {
                icon.innerHTML = "&#x1F327" + "<br>";
            }
            else if (temperature >= 5 && temperature < 10) {
                icon.innerHTML = "🌁" + "<br>";
            }
            else if (temperature < 5 && temperature >= 1) {
                icon.innerHTML = "&#x1F328";
            }
            else if (temperature < 1) {
                icon.innerHTML = "&#x2744" + "<br>";
            }

            var observation = document.getElementById("description");
            observation.innerText = obj.days[0].description;
            var precip = document.getElementById("precip");
            precip.innerText = "Precip: "+obj.days[0].precip+"mm";
            var pressure = document.getElementById("pressure");
            pressure.innerText = "Pressure: "+obj.days[0].pressure+"mb";
            var windSpeed = document.getElementById("wind");
            windSpeed.innerText = "Wind: "+obj.days[0].windspeed+"kmph"; 


            for (let i = 1; i < 6; i++) {
                var icon = document.getElementById(`image${i}`);
                console.log(icon);
                var aboutImage = document.getElementById(`weather${i}`);
                var dayName = document.getElementById(`day${i}`);
                var newDate = new Date(today);
                newDate.setDate(today.getDate()+i);
                var dateOnly = newDate.toISOString().split("T")[0];

                var day = new Date(dateOnly);
                var dayOfWeek = day.getDay();
                dayName.innerText = array[dayOfWeek];

                var fahrenhit = obj.days[i].temp;
                var celsius = (Number(fahrenhit) - 32) / 1.8;
                var temperature = Math.round(celsius);
                aboutImage.innerText = temperature + "\u00B0C";


                if (temperature >= 25) {
                    icon.innerHTML = "&#x2600" + "<br>";
                }
                else if (temperature >= 20 && temperature < 25) {
                    icon.innerHTML = "&#x1F324" + "<br>";
                }
                else if (temperature >= 15 && temperature < 20) {
                    icon.innerHTML = "&#xFE0F" + "<br>";
                }
                else if (temperature >= 10 && temperature < 15) {
                    icon.innerHTML = "&#x1F327" + "<br>";
                }
                else if (temperature >= 5 && temperature < 10) {
                    icon.innerHTML = "🌁" + "<br>";
                }
                else if (temperature < 5 && temperature >= 1) {
                    icon.innerHTML = "&#x1F328";
                }
                else if (temperature < 1) {
                    icon.innerHTML = "&#x2744" + "<br>";
                }
    
            }
            count++;
            console.log(count);
        }
        else {
            console.log("Error");
        }
    }     

    xhr.send();
    console.log(count);  
}

defaultWeatherReport();



function weatherReport(){
    
    var place = document.getElementById("place").value;
    var xhr = new XMLHttpRequest();
    var array = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    var count=0;

    
    var today = new Date();
    var now = today.toISOString().split("T")[0];
    var future = new Date(today);
    future.setDate(today.getDate() + 5);

    var date = future.toISOString().split("T");
    var url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + place + "/" + now + "/" + date[0] + "?key=489MV6Y8JR2QGR9VALQKSRLSB";
    xhr.open("GET", url);


    xhr.onload = function () {
        if (xhr.status == 200) {
            var obj = JSON.parse(xhr.responseText);
            console.log(obj);
            
            var message = document.getElementById("box1");
            message.innerText = obj.resolvedAddress;
            console.log(obj.resolvedAddress);

            var icon = document.getElementById("image0");
            console.log(icon);
            var aboutImage = document.getElementById("about");


            var temp = document.getElementById("temperature");
            var fahrenhit = obj.days[0].temp;
            var celsius = (Number(fahrenhit) - 32) / 1.8;
            var temperature = Math.round(celsius);
            temp.innerText = temperature + "\u00B0C";


            if (temperature >= 25) {
                icon.style.color = "#FCC11A";
                icon.innerHTML = "&#x2600";
            }
            else if (temperature >= 20 && temperature < 25) {
                icon.innerHTML = "&#x1F324";

            }
            else if (temperature >= 15 && temperature < 20) {
                icon.innerHTML = "☁️";
                icon.style.color = "white";
            }
            else if (temperature >= 10 && temperature < 15) {
                icon.innerHTML = "&#x1F327";
            }
            else if (temperature >= 5 && temperature < 10) {
                icon.innerHTML = "🌁";
            }
            else if (temperature < 5 && temperature >= 1) {
                icon.innerHTML = "&#x1F328";
            }
            else if (temperature < 1) {
                icon.innerHTML = "&#x2744";
                icon.style.color="skyblue";
            }

            var observation = document.getElementById("description");
            observation.innerText = obj.days[0].description;
            var precip = document.getElementById("precip");
            precip.innerText = "Precip: "+obj.days[0].precip+"mm";
            var pressure = document.getElementById("pressure");
            pressure.innerText = "Pressure: "+obj.days[0].pressure+"mb";
            var windSpeed = document.getElementById("wind");
            windSpeed.innerText = "Wind: "+obj.days[0].windspeed+"kmph"; 


            for (let i = 1; i < 6; i++) {
                var icon = document.getElementById(`image${i}`);
                console.log(icon);
                var aboutImage = document.getElementById(`weather${i}`);
                var dayName = document.getElementById(`day${i}`);
                var newDate = new Date(today);
                newDate.setDate(today.getDate()+i);
                var dateOnly = newDate.toISOString().split("T")[0];

                var day = new Date(dateOnly);
                var dayOfWeek = day.getDay();
                dayName.innerText = array[dayOfWeek];

                var fahrenhit = obj.days[i].temp;
                var celsius = (Number(fahrenhit) - 32) / 1.8;
                var temperature = Math.round(celsius);
                aboutImage.innerText = temperature + "\u00B0C";


                if (temperature >= 25) {
                    icon.innerHTML = "&#x2600";
                    icon.style.color = "#FCC11A";
                }
                else if (temperature >= 20 && temperature < 25) {
                    icon.innerHTML = "&#x1F324";

                }
                else if (temperature >= 15 && temperature < 20) {
                    icon.innerHTML = "☁️";
                    icon.style.color = "white";
                }
                else if (temperature >= 10 && temperature < 15) {
                    icon.innerHTML = "&#x1F327";
                }
                else if (temperature >= 5 && temperature < 10) {
                    icon.innerHTML = "🌁";
                }
                else if (temperature < 5 && temperature >= 1) {
                    icon.innerHTML = "&#x1F328";
                }
                else if (temperature < 1) {
                    icon.innerHTML = "&#x2744";
                    icon.style.color="skyblue";
                }
    
            }
        }
        else {
            console.log("Error");
        }
    }     

    xhr.send();
    console.log(count);  
}


// // function test()
// // {
//     var xhr=new XMLHttpRequest();
//     var clientId="1000.WSD684XY37I1FYLVS1UTVOPL1QI87C";
//     var secretId="2e447edf33a0400e8c6c6879c8aaec2ca313bbe09e";
//     // var url="https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCliq.Webhooks.CREATE&client_id="+clientId+"&state=5466400890088961855&response_type=code&redirect_uri=http://127.0.0.1:5500&access_type=offline"
//     // var url="https://accounts.zoho.com/oauth/v2/token?code=1000.dd7e47321d48b8a7e312e3d6eb1a9bb8.b6c07ac766ec11da98bf6a261e24dca4&grant_type=authorization_code&scope=ZohoCliq.Webhooks.CREATE&client_id="+clientId+"&client_secret="+secretId+"&redirect_uri=http://127.0.0.1:5500";

//     var url=" https://cliq.zoho.com/api/v2/chats";
//     xhr.open("GET",url);

//     xhr.onload=function(){
//         console.log(xhr);
//     }

//     xhr.send();
// // }


// var url = "https://api.aviationstack.com/v1/flights?access_key=47e13752bdf931c09a784d9eb497b840&flight_date=2024-12-01";
var url = "https://api.aviationstack.com/v1/flights?access_key=abd5298567f3968818b78badeb905215"

fetch(url,{
    method:"GET",
}).then((response)=>
    response.json()
).then((obj)=>console.log(obj))
.catch(err=>console.log(err))


// var chatgptApiKey = "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";
