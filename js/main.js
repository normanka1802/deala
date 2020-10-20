// document.cookie = 'cookie2=value2; sameSite=None; secure';

document.getElementById('menu').addEventListener('click', showMenu);

function showMenu() {
    document.getElementById('side-menu-content').classList.add('show');
}

document.getElementById('side-menu-content').addEventListener('click', removeMenu);

function removeMenu() {
    document.getElementById('side-menu-content').classList.remove('show');
}



