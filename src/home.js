function loadHome() {
    const home = document.createElement('div');
    home.classList.add('unhidden');
    home.id = "home-div";
    home.textContent = "Welcome to Los Pollos Hermanos with Chef Gustavo Fring";

    return home;
}

export default loadHome