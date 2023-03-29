function change_the_image(image){

if(image[`target`].getAttribute(`src`) === `/images/399.png`){

    image[`target`].setAttribute(`src`, `https://www.serebii.net/swordshield/pokemon/399.png`);

}else{

    image[`target`].setAttribute(`src`, `/images/399.png`);
}

};

let change_image = document.querySelectorAll(`.page_span`);

for(counter = 0; counter < change_image.length; counter = counter +1){

change_image[counter].addEventListener(`click`, change_the_image)


};

