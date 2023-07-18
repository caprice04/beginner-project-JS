// indentation is more important be careful i miss a ; it take a time (10min) to find...

const accessKey = "C7Cby_HmsLIrmzVZo_4QfOkRJb2oWeklddmsYouoNoE"

const form1 = document.querySelector("form")
const input1  = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("btn")

let inputData = "" ;
let page = 1;

async function searchImages(){
    inputData = input1.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
     
     const response = await fetch(url);
     const data = await response.json();

     const results = data.results;

     if (page===1) {
        searchResults.innerHTML = "";
                      
     }

     results.map((result) => {

        const imagesWrap = document.createElement("div");

        imagesWrap.classList.add("search-result");

        const image = document.createElement("img");
        image.src = result.urls.small ;

        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imagesWrap.appendChild (image);
        imagesWrap.appendChild(imageLink);
        searchResults.appendChild(imagesWrap);
     });

     page++;

     if(page>1){
        showMore.style.display = "block"; // in css "btn" we use display none so we change this property into display block
    
     }

}

form1.addEventListener("submit", (event) =>{
    event.preventDefault(); // prevent the default event
    page= 1; //intialize the page will be one
    searchImages();  // if someone want show more images so that's why we have to call this search image function
});

showMore.addEventListener("click", () =>{
   
    searchImages();


});





