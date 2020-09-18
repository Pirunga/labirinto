let map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const moveBox = (evt) => {
    let keyPressed = evt.key;
    let actualPosition = map[positonPersonagem('y')][positonPersonagem('x')];
    let up = map[positonPersonagem('y') + 1][positonPersonagem('x')];
    let down = map[positonPersonagem('y') - 1][positonPersonagem('x')];
    let right = map[positonPersonagem('y')][positonPersonagem('x') + 1];
    let left = map[positonPersonagem('y')][positonPersonagem('x') - 1];

    switch (keyPressed) {
        case "ArrowUp":
            if (up === ' ') {
                actualPosition = ' ';
                up = 'S';
            }

            if (up !== ' ') {
                alert('Você esbarrou em uma parede!');
            }

            mapa;
            break;
        
        case "ArrowDown":
            if (down === ' ') {
                actualPosition = ' ';
                down = 'S';
            }

            if (down !== ' ') {
                alert('Você esbarrou em uma parede!');
            }

            mapa;
            break;

        case "ArrowLeft":
            if (left === ' ') {
                actualPosition = ' ';
                left = 'S';
            }

            if (left !== ' ') {
                alert('Você esbarrou em uma parede!');
            }

            mapa;
            break;

        case "ArrowRight":
            if (right === ' ') {
                actualPosition = ' ';
                right = 'S';
            }

            if (right !== ' ') {
                alert('Você esbarrou em uma parede!');
            }
            console.log(map);

            break;
    }
}

const positonPersonagem = (position) => {
    for (let i = 0; i < map.length; i++) {
        let mapX = map[i];

        for (let j = 0; j < mapX.length; j++) {
            if (mapX[j] === 'S') {

                if (position === 'x') {
                    return j;
                }

                return i;
            }
        }
    }
}

const container = document.createElement('div');
container.id = "container";
document.body.appendChild(container);

const mapa = () => {
    for (let i = 0; i < map.length; i++) {
        let mapj = map[i];
        for (let j = 0; j < mapj.length; j++) {
            if (mapj[j] === 'W') {
                const divWall = document.createElement('div');
                divWall.id = "parede";
                container.appendChild(divWall);
            }

            if (mapj[j] === ' ') {
                const divCaminho = document.createElement('div');
                divCaminho.id = `caminho${i}${j}`;
                divCaminho.className = "caminho";
                container.appendChild(divCaminho);
            }

            if (mapj[j] === 'S') {
                const divPersonagem = document.createElement('div');
                divPersonagem.id = "personagem";
                container.appendChild(divPersonagem);
            }

            if (mapj[j] === 'F') {
                const divFinal = document.createElement('div');
                divFinal.id = "final";
                container.appendChild(divFinal);
            }
        }
    }
}
mapa();

document.addEventListener('keydown', moveBox);