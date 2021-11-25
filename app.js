const seats = document.querySelectorAll(".row .seat:not(.selected-seat)");
const movieSelection = document.getElementById("movie-selection");
const approveButton = document.getElementById("approve-button");
const selectedSeats = document.getElementsByClassName("selected-seat");
const allSeats = document.querySelectorAll(".row .seat");
let valueFilm = 0;
let a = []
localStorage.clear();
movieSelection.addEventListener("change", (e)=>{
    valueFilm = e.target.value;
    allSeats.forEach(g =>{
        g.classList.remove("occupied");
        g.classList.add("reset-seats");
    });
    a = [];
    a = a.concat([...localStorage.getItem(movieSelection.options[movieSelection.selectedIndex].value).split(",")])
    localStorageLoad();
});




seats.forEach(element =>{
    element.addEventListener("click", ()=>{
        if(valueFilm === 0) alert("Please select a film please!!")
        else{
            element.classList.remove("reset-seats");
            element.classList.toggle("selected-seat"); 
    }
    
})

})
approveButton.addEventListener("click", ()=>{
    confirm("Are you sure to confirm?");
    addLocalStorage();


    [...selectedSeats].forEach((e) =>{
        e.classList.remove("selected-seat");
        e.classList.add("occupied");        
    });
                
                 
})
function addLocalStorage() {
    let valuesOfOptions = [...movieSelection.options].map(e =>{
            return e.value}).splice(1); 
            
   let x = [...selectedSeats].map( (f) => {
                return f.textContent;});
    a = a.concat(x);
    
                
    valuesOfOptions.forEach(e=>{
        if(e == movieSelection.options[movieSelection.selectedIndex].value){
            localStorage.setItem(e, a);
        }
    });
 
}
function localStorageLoad() {
    let valuesOfOptions = [...movieSelection.options].map(e =>{
        return e.value}).splice(1);
    valuesOfOptions.forEach(e=>{
        if(e == movieSelection.options[movieSelection.selectedIndex].value){
            allSeats.forEach(g =>{
            [...localStorage.getItem(e).split(",")].forEach(f =>{
                if(g.textContent == f){
                    g.classList.remove("reset-seats");                    
                    g.classList.add("occupied");
                };
            });
        });
            }
    });
    }
    