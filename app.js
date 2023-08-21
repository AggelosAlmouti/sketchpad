function clearPad(pad) {
    while (pad.firstChild) {
        pad.removeChild(pad.lastChild);
    };
}

const pad = document.querySelector('.pad');
//create initial pad with normal density
let density = 16;
let squareHeight = 400 / density;
for (i = 0; i < Math.pow(density, 2); i++) {
    const square = document.createElement('div');
    square.setAttribute('style',
        `background-color: white; height: ${squareHeight}px; width: ${squareHeight}px; margin: 0; padding: 0; border-radius: 2px;`);
    square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = '#1a1a1a';
    });
    pad.append(square);
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        clearPad(pad);

        let density;
        if (button.value == 'normal') {
            density = 16;
        } else if (button.value == 'dense') {
            density = 25;
        } else {
            density = 50;
        }

        //create new pad
        let squareHeight = 400 / density;
        for (i = 0; i < Math.pow(density, 2); i++) {
            const square = document.createElement('div');
            square.setAttribute('style',
                `background-color: white; height: ${squareHeight}px; width: ${squareHeight}px; margin: 0; padding: 0; border-radius: 2px;`);
            square.addEventListener('mouseover', (e) => {
                square.style.backgroundColor = '#1a1a1a';
            });
            pad.append(square);
        };
    })

});