// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
document.getElementById("wallet").innerText=JSON.parse(localStorage.getItem('amount')||0)

var moviesdiv=document.getElementById("movies")

//const url="http://www.omdbapi.com/?i=tt3896198&apikey=97e8b116"

async function searchmovies(){
    try{
        const search=document.getElementById("search").value;
        const res= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=97e8b116&s=${search}`)

      
        const data=await res.json()
        const movies=data.Search;
        console.log("data:", data);
        return movies;
        
  

    }
    catch(err){
        console.log("err",err);
    }
}

function appendmovies(data){

moviesdiv.innerHTML=null;
data.forEach(function(el){
    console.log("om")
    let p= document.createElement("p");
    p.innerText=el.Title
    moviesdiv.append(p);
   document.getElementById("movies").append(p);
})
}
 async function main()
 {
     let data=await searchmovies()
     appendmovies(data);
 }