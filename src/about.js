function loadAbout() {
    const contentDiv = document.createElement('div');
    contentDiv.textContent = "Contact us by: \nPhone: 123-456-789 \nEmail: \
    james.smith@gmail.com";

    contentDiv.id = "about-div";
    contentDiv.classList.add('hidden');

    return contentDiv;
}


export default loadAbout