import React, { useEffect, useRef, useState } from 'react';
import P5 from 'p5';
import '../styles/global.css'

function SandSimulation() {
    const canvasRef = useRef(null);
    const [clicked, setClicked] = useState(false);
    const drawFunctionRef = useRef(null);

    useEffect(() => {
        const sketch = (p) => {
            let grid;
            let velocityGrid;
            let w = 6;
            let cols, rows;
            let hueValue = 200;
            let gravity = 0.1;

            function make2DArray(cols, rows) {
                let arr = new Array(cols);
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = new Array(rows).fill(0);
                }
                return arr;
            }

            function withinCols(i) {
                return i >= 0 && i <= cols - 1;
            }

            function withinRows(j) {
                return j >= 0 && j <= rows - 1;
            }

            p.setup = () => {
                const canvasWidth = Math.floor(window.innerWidth / w) * w;
                const canvasHeight = Math.floor(window.innerHeight / w) * w;
                console.log(canvasHeight);
                p.createCanvas(canvasWidth, canvasHeight);
                p.colorMode(p.HSB, 360, 255, 255);
                cols = p.width / w;
                rows = p.height / w;
                grid = make2DArray(cols, rows);
                velocityGrid = make2DArray(cols, rows).fill(1);
            };

            p.mouseDragged = () => {
                let mouseCol = p.floor(p.mouseX / w);
                let mouseRow = p.floor(p.mouseY / w);

                let matrix = 5;
                let extent = p.floor(matrix / 2);
                for (let i = -extent; i <= extent; i++) {
                    for (let j = -extent; j <= extent; j++) {
                        if (p.random(1) < 0.75) {
                            let col = mouseCol + i;
                            let row = mouseRow + j;
                            if (withinCols(col) && withinRows(row)) {
                                grid[col][row] = hueValue;
                                velocityGrid[col][row] = 1;
                            }
                        }
                    }
                }
                hueValue += 0.5;
                if (hueValue > 360) {
                    hueValue = 1;
                }
                setClicked(true);
            };

            p.draw = () => {
                p.background(0);

                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        p.noStroke();
                        if (grid[i][j] > 0) {
                            p.fill(grid[i][j], 100, 200);
                            let x = i * w;
                            let y = j * w;
                            p.square(x, y, w);
                        }
                    }
                }

                let nextGrid = make2DArray(cols, rows);
                let nextVelocityGrid = make2DArray(cols, rows);

                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        let state = grid[i][j];
                        let velocity = velocityGrid[i][j];
                        let moved = false;
                        if (state > 0) {
                            let newPos = p.int(j + velocity);
                            for (let y = newPos; y > j; y--) {
                                let below = grid[i][y];
                                let dir = 1;
                                if (p.random(1) < 0.5) {
                                    dir *= -1;
                                }
                                let belowA = -1;
                                let belowB = -1;
                                if (withinCols(i + dir)) belowA = grid[i + dir][y];
                                if (withinCols(i - dir)) belowB = grid[i - dir][y];

                                if (below === 0) {
                                    nextGrid[i][y] = state;
                                    nextVelocityGrid[i][y] = velocity + gravity;
                                    moved = true;
                                    break;
                                } else if (belowA === 0) {
                                    nextGrid[i + dir][y] = state;
                                    nextVelocityGrid[i + dir][y] = velocity + gravity;
                                    moved = true;
                                    break;
                                } else if (belowB === 0) {
                                    nextGrid[i - dir][y] = state;
                                    nextVelocityGrid[i - dir][y] = velocity + gravity;
                                    moved = true;
                                    break;
                                }
                            }
                        }

                        if (state > 0 && !moved) {
                            nextGrid[i][j] = grid[i][j];
                            nextVelocityGrid[i][j] = velocityGrid[i][j] + gravity;
                        }
                    }
                }
                grid = nextGrid;
                velocityGrid = nextVelocityGrid;
            };

            drawFunctionRef.current = p.draw;
        };

        if (canvasRef.current) {
            new P5(sketch, canvasRef.current);
        }

    }, []);

    return (
        <>
            <div className="sand-container">
                {!clicked && (
                    <div className="center-text">Click me!</div>
                )}
                <div className="canvas-container">
                    <div ref={canvasRef}></div>
                </div>
            </div>
        </>
    );
}

export default SandSimulation;
