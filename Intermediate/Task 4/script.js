const btn = document.getElementById('themeToggleBtn');

const body = document.body;

btn.addEventListener('click',() => {
    if(body.classList.contains('dark-theme')){
        body.classList.remove('dark-theme');
        btn.textContent = "Switch to Dark Mode 🌙";
    }else{
        body.classList.add('dark-theme');
        btn.textContent = "Switch to Light Mode ☀️";
    }
})