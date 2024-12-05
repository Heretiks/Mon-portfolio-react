import React, { useRef, useEffect, useState } from 'react';
import P5 from 'p5';

const SandTextSimulation = () => {
    const sketchRef = useRef(null);
    const [materialChoice, setMaterialChoice] = useState(0);

    useEffect(() => {
        const sketch = (p) => {
            let board, rows, columns;
            const size = 8;
            let background;
            const materials = ["Water", "Sand", "Remove"];
            const drawRadius = 40;
            let materialText;
            let sandList = [];
            let waterList = [];
            let canvasWidth;
            let canvasHeight;

            p.setup = () => {
                const canvasWidth = Math.floor(window.innerWidth / size) * size;
                const canvasHeight = Math.floor((window.innerHeight * 0.65) / size) * size;
                p.createCanvas(canvasWidth, canvasHeight);
                rows = Math.floor(p.width / size);
                columns = Math.floor(p.height / size);
                board = fillBoard();
                materialText = p.createP(materials[materialChoice]);
                fillWithBackground();
                p.background(80, 105, 85);
            };

            p.draw = () => {
                materialText.html(materials[materialChoice]);
                p.background(80, 105, 85, 200);
                drawSand();
                drawWater();
            };

            p.mouseDragged = () => {
                let mx = p.mouseX;
                let my = p.mouseY;
                let tr = Math.floor(drawRadius / size);
                p.stroke(0);
                p.noFill();
                p.circle(mx, my, drawRadius * 2);
                let mx2 = Math.floor(mx / size);
                let my2 = Math.floor(my / size);

                if (mx < p.width && mx > 0 && my < p.height && my > 0 && p.frameRate() > 25) {
                    for (let x2 = mx2 - tr; x2 < mx2 + tr; x2++) {
                        for (let y2 = my2 - tr; y2 < my2 + tr; y2++) {
                            let distance = p.dist(mx2, my2, x2, y2);
                            if (distance < tr) {
                                if (board[x2][y2] === 0 && p.random() < 0.25) {
                                    switch (materialChoice) {
                                        case 1:
                                            let s = new Sand(x2, y2);
                                            s.ready = true;
                                            sandList.push(s);
                                            break;
                                        case 0:
                                            let v = new Water(x2, y2);
                                            waterList.push(v);
                                            break;
                                        default:
                                            break;
                                    }
                                } else if (board[x2][y2] !== 0 && materialChoice === 2) {
                                    for (let s of sandList) {
                                        if (s.x === x2 && s.y === y2) {
                                            s.deadTime = 1;
                                            s.dead = true;
                                        }
                                    }
                                    for (let s of waterList) {
                                        if (s.x === x2 && s.y === y2) {
                                            s.deadTime = 1;
                                            s.dead = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };

            function fillBoard() {
                let out = [];
                for (let x = 0; x < rows; x++) {
                    let row = [];
                    for (let y = 0; y < columns; y++) {
                        row.push(0);
                    }
                    out.push(row);
                }
                return out;
            }

            function drawSand() {
                for (let i = sandList.length - 1; i >= 0; i--) {
                    let s = sandList[i];
                    if (s.deadTime === 0) {
                        board[s.x][s.y] = 0;
                        sandList.splice(i, 1);
                    } else {
                        s.show();
                        s.update();
                        if (s.phase === 0) {
                            s.build();
                        } else {
                            s.move();
                        }
                        s.changeColor();
                    }
                }
            }

            function drawWater() {
                for (let i = waterList.length - 1; i >= 0; i--) {
                    let s = waterList[i];
                    if (s.deadTime === 0) {
                        board[s.x][s.y] = 0;
                        waterList.splice(i, 1);
                    } else {
                        s.show();
                        s.update();
                        s.move();
                        s.switch();
                        s.etch();
                    }
                }
            }

            function fillWithBackground() {
                background = p.createGraphics(canvasWidth, canvasHeight);
                background.background(0);
                background.fill(255);
                background.textSize(p.width / 3);
                background.textStyle(p.BOLD);
                background.textAlign(p.CENTER, p.CENTER);
                let t = p.nf(p.hour(), 2);
                let m = p.nf(p.minute(), 2);
                background.text(t + ":" + m, p.width / 2, p.height * 0.5);

                for (let x = 0; x < rows; x++) {
                    for (let y = 0; y < columns; y++) {
                        let color = background.get(x * size, y * size)[0];
                        if (color > 128) {
                            let s = new Sand(x, y);
                            sandList.push(s);
                        }
                    }
                }
            }

            // Other functions and classes
            // ...

            class Sand {
                constructor(x, y) {
                    this.ID = p.random();
                    this.tx = x;
                    this.ty = y;
                    this.x = x;
                    this.y = y;
                    board[x][y] = this.ID;
                    this.ready = false;
                    this.readyTime = -1;
                    this.dead = false;
                    this.deadTime = -1;
                    this.home = p.createVector(0, 0);
                    this.changedColor = false;
                    let variation = 10;
                    this.color = [
                        234 + p.random(-variation),
                        181 + p.random(-variation, variation),
                        33 + p.random(-variation, variation),
                    ];
                    this.color0 = copy(this.color);
                    this.phase = 1;
                }

                // Methods of the Sand class
                build() {
                    if (this.x === this.home.x && this.y === this.home.y) {
                        board[this.x][this.y] = this.ID;
                        board[this.home.x][this.home.y] = this.ID;
                        this.phase = 1;
                    } else if (p.random() < 0.5) {
                        let directions = [
                            { x: 1, y: 0 },
                            { x: 1, y: 1 },
                            { x: 0, y: 1 },
                            { x: -1, y: 1 },
                            { x: -1, y: 0 },
                            { x: -1, y: -1 },
                            { x: 0, y: -1 },
                            { x: 1, y: -1 },
                            { x: 1, y: 0 },
                            { x: 1, y: 1 },
                            { x: 0, y: 1 },
                            { x: -1, y: 1 },
                            { x: -1, y: 0 },
                            { x: -1, y: -1 },
                            { x: 0, y: -1 },
                            { x: 1, y: -1 },
                        ];
                        let angle = P5.Vector.sub(this.home, p.createVector(this.x, this.y)).heading();
                        let i = Math.floor(p.map(angle, -p.TAU, p.TAU, 0, directions.length));
                        let selectedDirection = directions[Math.abs(i)];
                        let newX = this.x + selectedDirection.x;
                        let newY = this.y + selectedDirection.y;
                        if (newX >= 0 && newX <= rows - 1 && newY >= 0 && newY <= columns - 1) {
                            if (board[this.x][this.y] === this.ID || board[this.x][this.y] === 2) {
                                board[this.x][this.y] = 0;
                            }
                            this.x = newX;
                            this.y = newY;
                            if (board[newX][newY] === 0) {
                                board[newX][newY] = this.ID;
                            }
                        }
                    }
                }

                move() {
                    if (this.ready) {
                        let x = this.x;
                        let y = this.y;
                        if (y < columns - 1) {
                            if (board[x][y + 1] === 0) {
                                board[x][y] = 0;
                                board[x][y + 1] = this.ID;
                                this.y++;
                            } else if (x < rows - 1 && x > 0) {
                                let options = [];
                                if (board[x + 1][y + 1] === 0) {
                                    options.push({ x: x + 1, y: y + 1 });
                                }
                                if (board[x - 1][y + 1] === 0) {
                                    options.push({ x: x - 1, y: y + 1 });
                                }
                                if (options.length > 0) {
                                    let chosen = p.random(options);
                                    board[this.x][this.y] = 0;
                                    this.x = chosen.x;
                                    this.y = chosen.y;
                                    board[this.x][this.y] = this.ID;
                                }
                            }
                        }
                    }
                }

                changeColor() {
                    let x = this.x;
                    let y = this.y;
                    if (x < rows - 1 && x > 0 && y < columns - 1 && y > 0) {
                        if (
                            board[x + 1][y] === 2 ||
                            board[x - 1][y] === 2 ||
                            board[x][y + 1] === 2 ||
                            (board[x][y - 1] === 2 && !this.changedColor)
                        ) {
                            this.color[0] = this.color0[0] - 40;
                            this.color[1] = this.color0[1] - 40;
                            this.color[2] = this.color0[2] - 40;
                        }
                    }
                }

                update() {
                    this.color[0] = p.lerp(this.color[0], this.color0[0], 0.005);
                    this.color[1] = p.lerp(this.color[1], this.color0[1], 0.005);
                    this.color[2] = p.lerp(this.color[2], this.color0[2], 0.005);
                    this.tx = p.lerp(this.tx, this.x, 0.5);
                    this.ty = p.lerp(this.ty, this.y, 0.5);

                    this.deadTime--;
                    this.readyTime--;
                    if (this.readyTime === 0) {
                        this.ready = true;
                        this.changedColor = false;
                    }

                    if (this.deadTime < 0) {
                        this.dead = false;
                        this.deadTime = -1;
                    }
                }

                show() {
                    p.stroke(this.color[0], this.color[1], this.color[2]);
                    p.strokeWeight(size);
                    p.point(this.tx * size, this.ty * size);
                }
            }


            class Water extends Sand {
                constructor(x, y) {
                    super(x, y);
                    board[x][y] = 2;
                    this.acid = false;
                    let ran1 = p.random(-10);
                    let ran2 = p.random(-10);
                    let ran3 = p.random(-10, 20);
                    let f = [37 + ran1, 70 + ran2, 82 + ran3];
                    this.color = [f[0], f[1], f[2]];
                    this.color0 = [f[0], f[1], f[2]];
                    this.ready = true;
                    if (p.random() < 0.00005) {
                        this.acid = true;
                        this.color = [0, 200, 0];
                        this.color0 = [0, 200, 0];
                    }
                }

                etch() {
                    if (this.acid) {
                        let x = this.x;
                        let y = this.y;
                        if (y < columns - 1) {
                            if (board[x][y + 1] > 0 && board[x][y + 1] < 1) {
                                for (let s of sandList) {
                                    if (s.x === x && s.y === y + 1) {
                                        s.deadTime = p.floor(p.random(0, 10));
                                        s.dead = true;
                                    }
                                }
                            }
                        }
                    }
                }

                move() {
                    if (this.ready) {
                        let x = this.x;
                        let y = this.y;
                        if (y < columns - 1) {
                            if (board[x][y + 1] === 0) {
                                board[x][y] = 0;
                                board[x][y + 1] = 2;
                                this.y++;
                            } else if (x < rows - 1 && x > 0) {
                                let options = [];
                                if (board[x + 1][y] === 0) {
                                    options.push({ x: x + 1, y: y });
                                }
                                if (board[x - 1][y] === 0) {
                                    options.push({ x: x - 1, y: y });
                                }
                                if (options.length > 0) {
                                    let chosen = p.random(options);
                                    board[this.x][this.y] = 0;
                                    this.x = chosen.x;
                                    this.y = chosen.y;
                                    board[this.x][this.y] = 2;
                                }
                            }
                        }
                    }
                }

                switch() {
                    if (this.y > 0) {
                        let x = this.x;
                        let y = this.y;
                        if (board[x][y - 1] < 1 && board[x][y - 1] > 0) {
                            for (let s of sandList) {
                                if (s.x === x && s.y === y - 1 && s.ready) {
                                    s.y = y;
                                    board[x][y - 1] = 2;
                                    board[x][y] = s.ID;
                                    this.y = y - 1;
                                    break;
                                }
                            }
                        }
                    }
                }
            }

            function copy(arr) {
                let out = [];
                for (let e of arr) {
                    out.push(e);
                }
                return out;
            }
        };

        sketchRef.current = new P5(sketch);
    }, [materialChoice]);
    return (
        <div className="canvas">
            <select value={materialChoice} onChange={(e) => {
                setMaterialChoice(Number(e.target.value));
            }}>
                <option value={0}>Water</option>
                <option value={1}>Sand</option>
                <option value={2}>Remove</option>
            </select>
            <div ref={sketchRef}></div>
        </div>
    );
};

export default SandTextSimulation;
