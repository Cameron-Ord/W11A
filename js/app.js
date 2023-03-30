
//this is random code for previous assignments, i just duplicated the template for this assingment//

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





//this function goes through if statements depending on which pokemon button I select, then sets the stringified object as the selection//

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

 //it returns false if something else is somehow selected//


 //the eventListener that selects that selects the cookie on click//
  
let choice = document.querySelectorAll(`.button`);

for(let  counter = 0; counter < choice.length; counter = counter +1){

    choice[counter].addEventListener(`click`, poke_select);
};


//the objects I used for each attribute//


let bidoof ={

name: `Bidoof`,

description: `the cutest ever`,

image_url: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.pokemondb.net%2Fartwork%2Flarge%2Fbidoof.jpg&f=1&nofb=1&ipt=0b86aec329ae6117399a94c423068d01bbf47c7083141410007ce7933c8e02fc&ipo=images`

};

let bibarel ={


    name: `Bibarel`,

    description: `the worst evolution ever`,

    image_url: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fproject-pokemon%2Fimages%2Ff%2Ffc%2FIMG_1184.PNG%2Frevision%2Flatest%3Fcb%3D20170509133452&f=1&nofb=1&ipt=de126b8b6349012b81ae04ee86beade26e7a01092effb543bb78708b4b9bf375&ipo=images`


};

let purugly = {


    name: `purugly`,

    description: `fat cat`,

    image_url: `https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20140916013545%2Fpokemon%2Fimages%2F2%2F23%2F432Purugly_DP_anime.png&f=1&nofb=1&ipt=36b218ba972aeb0230d8d101a89e5382010cf60e5affdd5f23b81c51d89961aa&ipo=images`
};


//the variable that turns the objects into strings//

let bidoof_json = JSON.stringify(bidoof);
let purugly_json = JSON.stringify(purugly);
let bibarel_json = JSON.stringify(bibarel);






