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




function poke_select(details){

    Cookies.set(`selection`, details[`target`].getAttribute(`pokemon`));

if(details[`target`].getAttribute(`pokemon`) === `bidoof`){

Cookies.set(`selection`, bidoof_json);

}else if(details[`target`].getAttribute(`pokemon`) === `purugly`){

Cookies.set(`selection`, purugly_json);
    
}else if(details[`target`].getAttribute(`pokemon`) === `bibarel`){

Cookies.set(`selection`, bibarel_json);

};
return false;
};



let choice = document.querySelectorAll(`.button`);

for(let  counter = 0; counter < choice.length; counter = counter +1){

    choice[counter].addEventListener(`click`, poke_select);
};



let bidoof ={

name: `Bidoof`,

description: `the cutest ever`,

image_url: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.pokemondb.net%2Fartwork%2Flarge%2Fbidoof.jpg&f=1&nofb=1&ipt=0b86aec329ae6117399a94c423068d01bbf47c7083141410007ce7933c8e02fc&ipo=images`

};

let bibarel ={


    name: `Bibarel`,

    description: `the worst evolution ever`,

    image_url: `gross`


};

let purugly = {


    name: `purugly`,

    description: `fat cat`,

    image_url: `fat`
};

let bidoof_json = JSON.stringify(bidoof);
let purugly_json = JSON.stringify(purugly);
let bibarel_json = JSON.stringify(bibarel);






