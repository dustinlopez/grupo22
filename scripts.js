/*Menu*/
const hamburguesa = document.querySelector('.hamburguesa') 
const menu_h = document.querySelector('.menu_h')
hamburguesa.addEventListener('click',()=>{
    if(menu_h.style.display != 'block'){
        menu_h.style.display = 'block'
    }
    else{
        menu_h.style.display = 'none'
    }
})
/*Menu*/
/*Mapas*/ 
function cambiarmapa(ubicacion){
    if(ubicacion == '1'){
      document.getElementById("mapa").src="https://www.google.com/maps/d/u/0/embed?mid=1LNpkrKd3okZVEajf4Cq45ej5doJavNw&ehbc=2E312F";
    }
    if(ubicacion =="2"){
      document.getElementById("mapa").src="https://www.google.com/maps/d/u/0/embed?mid=1Hsydr4riB1KEmn1eUP6Nqmp87U4G3GA&ehbc=2E312F";
    }
    if(ubicacion=="3"){
      
      document.getElementById("mapa").src="https://www.google.com/maps/d/u/0/embed?mid=1RsQF3Y9mejCUErbdg3oiKsGuiQ8u3Lw&ehbc=2E312F";
    }
    if(ubicacion=="4"){
      
      document.getElementById("mapa").src="https://www.google.com/maps/d/u/0/embed?mid=1qQZBz8HpgD8h5-y-3el68s5XX5d76i4&ehbc=2E312F";
    }
    
  }
/*Mapas*/
