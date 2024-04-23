

const from = document.getElementById("car-from");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-cars");


const ui = new UI();

const storage = new Storage();

eventListeners();

function eventListeners(){
    from.addEventListener("submit",addCar);

    document.addEventListener("DOMContentLoaded",function(){
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars);
    });

    cardBody.addEventListener("click",deleteCar);
    clear.addEventListener("click",clearAllCars);
}

function addCar(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === ""){

        ui.displayMassages("Tüm alanları doldurun...","danger");
    }
    else{
        const newCar = new Car(title,price,url);

        ui.addCarToUI(newCar);

        storage.addCarToStorage(newCar);

        ui.displayMassages("Araç başarıyla eklendi...","success");
    }

    ui.clearInputs(titleElement, urlElement, priceElement);

    e.preventDefault();
}

function deleteCar(e){
    if(e.target.id === "delete-car"){
        ui.deleteCarFromUI(e.target);

        storage.deleteCarFromStroge(e.target.parentElement.previousElementSibling.parentElementSibling.textContent);

        ui.displayMassages("Silme işlemi başarıyla tamamlandı...","success");
    }
}

function clearAllCars(){
    
    if(confirm("Tüm araçlar silmek istediğinizden emin misiniz?"))
    ui.clearAllCarsFromUI();
    storage.clearAllCarsFromStroge();
}