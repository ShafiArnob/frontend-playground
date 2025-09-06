import React, { useEffect, useState } from "react";
import InputField from "./InputField";

const CanvasSettings = ({ canvas }) => {
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [canvasWidth, setCanvasWidth] = useState(500);

  useEffect(() => {
    if (canvas) {
      canvas.setHeight(canvasHeight);
      canvas.setWidth(canvasWidth);
    }
  }, [canvasHeight, canvasWidth, canvas]);

  const handleHeightChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);

    if (intValue >= 0) {
      setCanvasHeight(intValue);
    }
  };

  const handleWidthChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);

    if (intValue >= 0) {
      setCanvasWidth(intValue);
    }
  };

  return (
    <div className="fixed right-4 top-1/4 transform -translate-y-1/2 gap-2 flex flex-col bg-neutral-500 px-6 py-2 empty:hidden">
      <InputField
        label={"Height"}
        value={canvasHeight}
        onChange={handleHeightChange}
        uniqueId={"canvasHeight"}
      />
      <InputField
        label={"Width"}
        value={canvasWidth}
        onChange={handleWidthChange}
        uniqueId={"canvasWidth"}
      />
    </div>
  );
};

export default CanvasSettings;
