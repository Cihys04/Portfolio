let darkMode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkTheme = () =>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkTheme = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null)
}

if(darkMode === 'active') enableDarkTheme()

themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkmode');
    darkMode !== "active" ? enableDarkTheme() : disableDarkTheme(); 
})