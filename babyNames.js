
function generateNames()
{
    var gender = document.getElementById("box1").value;
    var obj=new XMLHttpRequest();
    var url="https://api.api-ninjas.com/v1/babynames?gender="+gender+"&X-Api-Key=0AChTfTW/hstaMJf7/ypXA==EXqV6KTKxEIxGdfW";

    obj.open("Get",url);

    obj.onload = function(){
        var object=JSON.parse(obj.responseText);
        console.log(object);
        console.log(object.length);
        if(obj.status=200)
        {
            var output=document.getElementById("whole2");
            output.innerHTML="";
            for(let i=1; i<object.length; i++){
                output.innerText+=object[i];
                output.innerHTML+="<br>";
            }           
        }
        else{
            console.log("Error");
        }
    }

    obj.send();
}


let testing=document.getElementById("test").innerText;
console.log(testing);
console.log(testing.includes("structure"));
