function myFunction(data){
    for(let i=0;i<data.length;i++){

        const menuContainer = document.createElement('div')

    const menuNameContainer =document.createElement('div')
    const menuName = document.createTextNode(data[i].name)
    menuNameContainer.appendChild(menuName)

    const menuDescriptionContainer = document.createElement('div')
    const menuDescription = document.createTextNode(data[i].hotDishes)
    menuDescriptionContainer.appendChild(menuDescription)

    const firstBrewedContainer = document.createElement('div')
    const beerBrewed = document.createTextNode(data[i].composition)
    firstBrewedContainer.appendChild(beerBrewed)

     
    const img = document.createElement('img')
    img.src = data[i].image_url

    beerContainer.addEventListener("click",()=>{
         console.log('aaa')
         location.href = "index.html"
    })

    menuContainer.appendChild(name)
    menuContainer.appendChild(hotDishes)
    menuContainer.appendChild(composition)
    beerContainer.appendChild(img)
   

    document.getElementById('BeersList').appendChild(beerContainer)
    
    }
}
// myFunction()

// let beerName =document.getElementById('beerName')

fetch('http://localhost:3000/menu',{method:'GET'})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    myFunction(data)
})
