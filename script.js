const theme = document.querySelector('#theme-select');

const defaulttheme = localStorage.getItem('theme') || 'theme-light'; // by default light theme will be used or else the theme which was stored previously (before refreshing)
settheme(defaulttheme);

theme.addEventListener('change', (e) => {
    settheme(e.target.value);
})

function settheme(theme){
    document.documentElement.className=theme;
    localStorage.setItem('theme', theme); // storing the theme even after the page is refreshed
    theme.value= theme; // to show the selected theme in select even after the page is refreshed
}