const addCookieBtn = document.getElementById('add-cookie-btn')
const plate = document.getElementById('plate')

function addCookie() {
    const newCookie = document.createElement('div');
    newCookie.classList.add('cookie')

    const cookieImg = document.createElement('img');
    cookieImg.src = 'assets/cookie.png';
    newCookie.appendChild(cookieImg);

    const plateWidth = plate.offsetWidth - 50;
    const plateHeight = plate.offsetHeight - 50;
    const randomX = Math.floor(Math.random() * plateWidth); // Random x position
    const randomY = Math.floor(Math.random() * plateHeight); // Random y position

    // Apply absolute positioning to the new cookie
    newCookie.style.position = 'absolute';
    newCookie.style.left = `${randomX}px`;
    newCookie.style.top = `${randomY}px`;

    // Append the new cookie to the plate
    plate.appendChild(newCookie);
}


addCookieBtn.addEventListener('click', addCookie)