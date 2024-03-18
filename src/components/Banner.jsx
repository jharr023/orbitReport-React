function Banner() {
    const header = document.createElement('header');
    header.textContent = 'Orbit Report';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Click on the buttons to see the satellites in that orbit type';

    header.appendChild(paragraph);

    return header;
}

export default Banner;