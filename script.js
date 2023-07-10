


document.addEventListener("DOMContentLoaded", function (){
    var pokeballButton = document.getElementById("pokeball")
    var greatballButton = document.getElementById("greatball")
    var ultraballButton = document.getElementById("ultraball")
    var masterballButton = document.getElementById("masterball")

    var pokeballContainer = document.getElementById("pokeballContainer")

    var answer;

    var alt = "unownq"

    let ballButtons = document.querySelectorAll("input[name=favoritePokeball]")
    ballButtons.forEach(rb => rb.addEventListener("change", function(){
        console.log(rb.value)
        console.log(pokeballContainer)
        console.log("pbc")

        changeBallPicture(rb.value, alt)
        

        
    }));

    });

function changeBallPicture(src, alt){
    var srcFolder = "pokeballs/"

    let image = document.createElement("img");
    image.src = srcFolder + src + ".png";
    image.alt = alt + ".png";
    image.width = 400;
    image.height = 400;

    image.setAttribute("id", "ballImage")

    if (pokeballContainer.childElementCount == 0){
        pokeballContainer.appendChild(image)

        //centering the new image via styling
        pokeballContainer.style.display = "flex"
        pokeballContainer.style.justifyContent = "center"
        pokeballContainer.style.alignItems = "center"
    } else {
        var allImageElements = document.querySelectorAll("#ballImage")
        console.log(allImageElements)
        for (let element = 0; element < allImageElements.length; element++){
            allImageElements[element].remove()
        }

        pokeballContainer.appendChild(image)
        
        //centering the new image via styling
        pokeballContainer.style.display = "flex"
        pokeballContainer.style.justifyContent = "center"
        pokeballContainer.style.alignItems = "center"

    }
}