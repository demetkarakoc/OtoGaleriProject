

function UI(){


}

UI.prototype.addCarToUI = function(newCar){

    /*
    <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr> -->
  <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr> -->*/

    const carList = document.getElementById("cars");

    carList.innerHTML += `
        <tr>
            <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
            <td>${newCar.title}</td>
            <td>${newCar.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr> 
    
`
}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";

}

UI.prototype.displayMassages = function(message,type){
    const cardBody = document.querySelector(".car-body");

    const div = document.createElement("div");

    div.className = 'alert alert-${type}';
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    },2000);
}

UI.prototype.loadAllCars = function(cars){

    cars.forEach(function(car){
        carList.innerHTML += `<tr>
            <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr> 
` 
    });
}


UI.prototype.deleteCarFromUI = function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllCarsFromUI = function(){
    const carList = document.getElementById("cars");

    carList.innerHTML += "";

    while(carList.firstElementChild !== null){
         carList.firstElementChild.remove();
        
    }
}