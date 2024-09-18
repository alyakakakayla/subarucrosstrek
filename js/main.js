const navVehicles = document.getElementById('vehicles');
const navInventory = document.getElementById('inventory');
const navDealer = document.getElementById('dealer');
const checkbox = document.getElementById('check')

navVehicles.addEventListener("click", uncheck);
navInventory.addEventListener("click", uncheck);
navDealer.addEventListener("click", uncheck);

function uncheck() {
    if(checkbox.checked == true) {
        checkbox.checked = false;
    }
}

uncheck();

if(checkbox.checked == true) {
    //hide scrollbar
}