document.body.style.backgroundColor='Silver';


const title=document.getElementById('title')
title.style.color='Green';



document.querySelectorAll("h3").forEach(h3 => {
    h3.style.textTransform = "uppercase";
  });

  


const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Orange";
fruitList.style.display = "flex";
fruitList.style.justifyContent = "space-between";
fruitList.appendChild(newFruit);

const  fruitImages = {
  "Mangoes": "images/mango.jpg",
  "Bananas": "images/banana.jpeg",
  "Water Melons": "images/watermelon.jpg",
  "Orange": "images/orange.jpeg"

}


document.querySelectorAll("#fruList li").forEach(li => {
    const fruitName = li.firstChild.textContent.trim();
    if (fruitImages[fruitName]) {
      const img = document.createElement("img");
      img.src = fruitImages[fruitName];
      img.alt = fruitName;
      img.className = "fruit-image";
      li.appendChild(img);
    }                                                                                                                                                                                                                                       
  
  });
  
  const img = document.createElement('img');




const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Spinach";
vegList.style.display = "flex";
vegList.style.justifyContent = "space-between"
vegList.appendChild(newVeg);

const vegImages = {
  "Onions": "images/onions.jpg",
  "Tomatoes": "images/tomatoes.jpg",
  "Kales": "images/kales.jpg",
  "Spinach": "images/spinach.jpg"
};


document.querySelectorAll("#vegList li").forEach(li => {
    const vegName = li.firstChild.textContent.trim();
    if (vegImages[vegName]) {
      const img = document.createElement("img");
      img.src = vegImages[vegName];
      img.alt = vegName;
      img.className = "veg-image";
      li.appendChild(img);
    }
  
  });





const button=document.getElementById('click-button')
button.style.padding='10px 9px 10px 11px'
button.style.background='none'
button.style.border = 'none'
button.style.backgroundColor = 'green'
button.style.borderRadius = '25px'
button.style.color = 'white'
button.style.fontSize = "23px"
button.style.cursor = 'pointer'
button.style.marginTop = "40px"
button.style.width = '150px'
button.style.height = '65px'
button.style.marginBottom = "40px"
button.style.justifyContent="centre"
button.addEventListener('click',()=>{
    button.style.backgroundColor='black'
    button.textContent='Ordered'})


const footer = document.createElement('footer');


const copyright = document.createElement('p');
copyright.textContent = 'Greens Kiosk \u00A9 2025 ';
footer.appendChild(copyright);


footer.style.backgroundColor = 'green';
footer.style.padding = '2px';
footer.style.height= '80px';


document.body.appendChild(footer);    
   
    




