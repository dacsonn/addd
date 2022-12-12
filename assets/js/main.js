const navSupport = document.getElementById('nav__support'),
      navOption = document.getElementById('nav__option'),
      navClose = document.getElementById('nav__close'),
      boDy = document.getElementById('body')
// Show NAV__SPORT

// Validate iff constant exists
if(navOption){
    navOption.onclick  = () =>{
        navSupport.classList.add('close-js')
        }
}

if(navClose || boDy){
    navClose.onclick  = () =>{
        navSupport.classList.remove('close-js')
    }
}



const infoSearch = document.getElementById('info__saerch'),
      navSearch = document.getElementById('nav__search'),
      searchBack = document.getElementById('search-back')
// Show NAV__SPORT

// Validate iff constant exists
if(navSearch){
    navSearch.onclick  = () =>{
        infoSearch.classList.add('close-js')
        }
}

if(searchBack || boDy){
    searchBack.onclick  = () =>{
        infoSearch.classList.remove('close-js')
        console.log("14")
    }
    
}
