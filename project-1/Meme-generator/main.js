const generatorBtn = document.querySelector('.gene .btn')
const MemeImage = document.querySelector('.gene img')
const memeTitle = document.querySelector('.gene .title')
const memeAuthor = document.querySelector('.gene .author')


const updateDetails = (url,title,author) =>{
    MemeImage.setAttribute("src",url);
    memeTitle.innerHTML= title;
    memeAuthor.innerHTML= author;

}
const generateMeme = () => {

    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then((data) =>{

        updateDetails(data.url,data.title,data.author);
    });
}
generatorBtn.addEventListener('click',generateMeme)