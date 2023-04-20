import { useEffect, useRef } from "react";

function SpaceGame() {

  const size = { width: 960, height: 540 };
  const canvasRef = useRef(null);

  let secondsPassed: number;
  let oldTimeStamp: number;
  let fps: number = 0;
  let rectX = 0;
  let rectY = 0;


  const gameLoop = (timestamp: number) => {
    if (!canvasRef.current) return;

    const context = ((canvasRef.current!) as any).getContext("2d");
    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timestamp - oldTimeStamp) / 1000;
    // Move forward in time with a maximum amount
    secondsPassed = Math.min(secondsPassed, 0.1);
    oldTimeStamp = timestamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed); 

    context.clearRect(0, 0, size.width, size.height);

    // Draw number to the screen
    context.font = "50px serif";
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 50, 90);

    updateGame();
    renderFrame();

    requestAnimationFrame(gameLoop);
  };

  const updateGame = () => {
    rectX += .1;
    rectY += .1;
  } 

  const renderFrame = () => {

    const context = ((canvasRef.current!) as any).getContext("2d");

    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 150, 100);

  };

  useEffect(() => {
    requestAnimationFrame(gameLoop);
  }, []);

  return <canvas {...size} ref={canvasRef} style={{border:"1px solid #000000", marginTop:"50px"}} />;
}

export default SpaceGame;