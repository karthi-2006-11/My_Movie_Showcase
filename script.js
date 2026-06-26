const movies = [

{
title:"Interstellar",
genre:["Sci-Fi","Adventure"],
rating:"⭐ 8.7/10",
poster:"img/Interstellar.jpg",
description:"A team of astronauts travel through a wormhole in search of a new home for humanity."
},

{
title:"The Batman",
genre:["Action","Crime"],
rating:"⭐ 8.2/10",
poster:"img/batman.jpg",
description:"Batman uncovers corruption in Gotham while pursuing the Riddler."
},

{
title:"Avatar",
genre:["Fantasy","Adventure"],
rating:"⭐ 7.9/10",
poster:"img/Avatar.jpg",
description:"A marine on Pandora becomes torn between following orders and protecting a new world."
},

{
title:"Joker",
genre:["Drama","Crime"],
rating:"⭐ 8.5/10",
poster:"img/Joker.jpg",
description:"The story of Arthur Fleck, a failed comedian whose descent into madness inspires a revolution."
},

{
title:"Spider-Man",
genre:["Action","Superhero"],
rating:"⭐ 8.6/10",
poster:"img/spiderman.jpg",
description:"Spider-Man faces villains from different universes in an epic adventure."
},

{
title:"Dune",
genre:["Sci-Fi","Adventure"],
rating:"⭐ 8.3/10",
poster:"img/Dune.jpg",
description:"Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis."
}

];

const container=document.getElementById("movieContainer");

movies.forEach(movie=>{

let tags="";

movie.genre.forEach(item=>{

tags+=`<span class="tag">${item}</span>`;

});

container.innerHTML+=`

<div class="card">

<img src="${movie.poster}">

<div class="content">

<h2>${movie.title}</h2>

<div class="tags">

${tags}

</div>

<div class="rating">

${movie.rating}

</div>

</div>

</div>

`;

});

const cards=document.querySelectorAll(".card");

const modal=document.getElementById("modal");

cards.forEach((card,index)=>{

card.onclick=()=>{

document.getElementById("modalImage").src=movies[index].poster;

document.getElementById("modalTitle").innerText=movies[index].title;

document.getElementById("modalGenre").innerHTML="<b>Genres:</b> "+movies[index].genre.join(", ");

document.getElementById("modalRating").innerHTML="<b>Rating:</b> "+movies[index].rating;

document.getElementById("modalDescription").innerHTML="<b>Description:</b> "+movies[index].description;

modal.style.display="flex";

}

});

document.getElementById("close").onclick=()=>{

modal.style.display="none";

}

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

}