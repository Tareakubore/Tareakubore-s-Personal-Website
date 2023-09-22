// get user selected texr
const getUserSelectedText = () => {
    return window.getSelection().toString();
}

// knowing when user reaches the end of the screen
window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
console.log("You are at the end of the page.")        
    }
}

// taking user back to top
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

