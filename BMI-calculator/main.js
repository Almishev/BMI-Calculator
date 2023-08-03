

function calculate(){
    var weight = document.getElementById("weight").value;
    var hight = document.getElementById("hight").value;

    var result = document.getElementById("bmi");

     if (hight === "" || isNaN(hight)){
        result.innerHTML = "Въведете валидна височина!";
     }
    
    else if (weight === "" || isNaN(weight)){
        result.innerHTML = "Въведете валидни килограми!";
    }
   else{
    result = (weight/((hight*hight)/ 10000)).toFixed(2);
    document.getElementById("bmi").innerHTML=result;
   }
   var res = document.getElementById("recomend");
   if (result < 18.6){
    res.innerHTML="под нормалмите килограми.";
   }

  if (result > 18.6 && result < 24.9){
    res.innerHTML="в нормалните килограми.";
  }
   if(result>24.9){
   res.innerHTML="над нормалните килограми.";
   }
}

  
function reload(){
    location.reload()
}

