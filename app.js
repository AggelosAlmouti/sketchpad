const pad = document.querySelector('.pad');
for (i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.setAttribute('style',
        'background-color: white; height: 16px; width: 16px; margin: 0; padding: 0; border-radius: 2px;');
    square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = 'black';
    });
    pad.append(square);
}