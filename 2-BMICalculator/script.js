const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height < 0 || height === " " || isNaN(height)) {
    result.textContent = "Please Enter a Valid height";
  } 
  else if (weight < 0 || weight === " " || isNaN(weight)) {
    result.textContent = "Please Enter a Valid weight";
  }
  else{
    const bmi= (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> ${bmi} </span>`;
    if(bmi < 18.6){
        result.innerHTML += "<p>You are Underweight</p>";
    }
    else if(bmi>18.9 && bmi<24.9){
        result.innerHTML+= "<p>You are Healthy</p>";
    }
    else{
        result.innerHTML += "<p>You are Overweight</p>";
    }
  }
});
