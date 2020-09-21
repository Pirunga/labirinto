let labirinto = [
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", " ", "W", " ", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", " ", "W", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W", " ", " ", " ", "W"],
    ["W", " ", "W", "W", "W", "W", "W", "W", "W", " ", "W", " ", "W", "W", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W"],
    ["W", " ", "W", " ", " ", " ", "W", " ", " ", " ", "W", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W"],
    ["W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W", " ", "W", "W", "W", " ", "W", " ", "F"],
    ["S", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", "W", "W"],
    ["W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W", " ", " ", " ", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", "W", "W", "W", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
];

const container = document.getElementById('container');

const imprimirLabirinto = () => {
    container.innerHTML = '';
    for (let i = 0; i < labirinto.length; i++) {
        let mapj = labirinto[i];
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

imprimirLabirinto();

const moveBox = (evt) => {
    let keyPressed = evt.key;
    let up = labirinto[positonPersonagem('linha') - 1][positonPersonagem('coluna')];
    let down = labirinto[positonPersonagem('linha') + 1][positonPersonagem('coluna')];
    let right = labirinto[positonPersonagem('linha')][positonPersonagem('coluna') + 1];
    let left = labirinto[positonPersonagem('linha')][positonPersonagem('coluna') - 1];

    switch (keyPressed) {
        case "ArrowUp":
            if (up === 'F') {
                alert('Parabéns, você ganhou !!!');
                alterarLab('up');
                setTimeout(function () {
                    document.location.reload(true);
                }, 2000);

                break;
            }

            if (up === ' ') {
                alterarLab('up');
            } else {
                alert('Você esbarrou em uma parede!');
            }

            break;

        case "ArrowDown":
            if (down === 'F') {
                alert('Parabéns, você ganhou !!!');
                alterarLab('down');
                setTimeout(function () {
                    document.location.reload(true);
                }, 2000);

                break;
            }

            if (down === ' ') {
                alterarLab('down');
            } else {
                alert('Você esbarrou em uma parede!');
            }

            break;

        case "ArrowLeft":
            if (left === 'F') {
                alert('Parabéns, você ganhou !!!');
                alterarLab('left');
                setTimeout(function () {
                    document.location.reload(true);
                }, 2000);

                break;
            }

            if (left === ' ') {
                alterarLab('left');
            } else {
                alert('Você esbarrou em uma parede!');
            }

            break;

        case "ArrowRight":
            if (right === 'F') {
                alert('Parabéns, você ganhou !!!');
                alterarLab('right');
                setTimeout(function () {
                    document.location.reload(true);
                }, 2000);

                break;
            }

            if (right === ' ') {
                alterarLab('right');
            } else {
                alert('Você esbarrou em uma parede!');
            }

            break;
        default:
            break;
    }
}

const positonPersonagem = (position) => {
    for (let i = 0; i < labirinto.length; i++) {
        let mapX = labirinto[i];

        for (let j = 0; j < mapX.length; j++) {
            if (mapX[j] === 'S') {

                if (position === 'coluna') {
                    return j;
                }

                return i;
            }
        }
    }
}

const alterarLab = (direction) => {
    let linha = positonPersonagem('linha');
    let coluna = positonPersonagem('coluna');

    switch (direction) {
        case 'up':
            labirinto[linha][coluna] = ' ';
            labirinto[linha - 1][coluna] = 'S';
            imprimirLabirinto();
            break;

        case 'down':
            labirinto[linha][coluna] = ' ';
            labirinto[linha + 1][coluna] = 'S';
            imprimirLabirinto();
            break;

        case 'left':
            labirinto[linha][coluna] = ' ';
            labirinto[linha][coluna - 1] = 'S';
            imprimirLabirinto();
            break;

        case 'right':
            labirinto[linha][coluna] = ' ';
            labirinto[linha][coluna + 1] = 'S';
            imprimirLabirinto();
            break;

        default:
            break;
    }
}

const checkWinner = () => {
    let actualPosition = labirinto[positonPersonagem('linha')][positonPersonagem('coluna')];
    if (actualPosition === 'F') {
        alert
    }
}

document.addEventListener('keydown', moveBox);