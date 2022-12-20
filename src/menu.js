function loadMenu() {
    const contentDiv = document.createElement('div');
    contentDiv.textContent = "Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit. Etiam ligula odio, faucibus \
    vel mattis vel, suscipit in ipsum. Ut molestie hendrerit \
    odio vitae lacinia. Curabitur rhoncus lorem a tellus congue,\
     quis maximus dolor elementum. Duis placerat posuere urna a \
     semper. Donec tempor ullamcorper accumsan. Quisque luctus luctus tempor.";

    contentDiv.id = "menu-div";
    contentDiv.classList.add('hidden');

    return contentDiv;
}


export default loadMenu