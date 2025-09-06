import { Button } from "@/components/ui/button";
import { Canvas, Rect } from "fabric";
import { Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Settings from "./components/Settings";
import CanvasSettings from "./components/CanvasSettings";

const Editor = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const initCanvas = new Canvas(canvasRef.current, {
        width: 500,
        height: 500,
      });

      initCanvas.backgroundColor = "#fff";
      initCanvas.renderAll();

      setCanvas(initCanvas);

      return () => {
        initCanvas.dispose();
      };
    }
  }, []);

  const addRect = () => {
    if (canvas) {
      const rect = new Rect({
        top: 100,
        left: 50,
        width: 100,
        height: 60,
        fill: "#084D42",
      });
      canvas.add(rect);
    }
  };

  return (
    <div className="text-center flex items-center justify-start flex-col px-24 py-4 bg-gray-200 min-h-screen h-full ">
      <div className="flex flex-col gap-2 bg-zinc-600 p-2 rounded-xl fixed top-[50%] transform -translate-y-1/2 left-4">
        <Button
          variant="secondary"
          size="icon"
          className="size-8"
          onClick={addRect}
        >
          <Square />
        </Button>
      </div>
      <canvas
        className="border border-zinc-600 z-10"
        id="canvas"
        ref={canvasRef}
      />
      <Settings canvas={canvas} />
      <CanvasSettings canvas={canvas} />
    </div>
  );
};

export default Editor;
