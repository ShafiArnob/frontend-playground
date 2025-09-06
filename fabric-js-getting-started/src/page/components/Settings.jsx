import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Settings = ({ canvas }) => {
  const [selectedObject, setSelectedObject] = useState(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (canvas) {
      canvas.on("selection:created", (event) => {
        handleObjectSelection(event.selected[0]);
      });

      canvas.on("selection:updated", (event) => {
        handleObjectSelection(event.selected[0]);
      });

      canvas.on("selection:cleared", (event) => {
        setSelectedObject(null);
        clearSettings();
      });

      canvas.on("object:modified", (event) => {
        handleObjectSelection(event.target);
      });

      canvas.on("object:scaling", (event) => {
        handleObjectSelection(event.target);
      });
    }
  }, [canvas]);

  const handleObjectSelection = (object) => {
    if (!object) return;

    setSelectedObject(object);

    if (object.type === "rect") {
      setWidth(Math.round(object.width * object.scaleX));
      setHeight(Math.round(object.height * object.scaleY));
      setColor(object.fill);
      setDiameter("");
    } else if (object.type === "circle") {
      setDiameter(Math.round(object.radius * 2 * object.scaleX));
      setColor(object.fill);
      setWidth("");
      setHeight("");
    }
  };

  const clearSettings = () => {
    setWidth("");
    setHeight("");
    setColor("");
    setDiameter("");
  };

  const handleWidthChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);

    setWidth(intValue);

    if (selectedObject && selectedObject.type === "rect" && intValue >= 0) {
      selectedObject.set({ width: intValue / selectedObject.scaleX });
      canvas.renderAll();
    }
  };

  const handleHeightChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);
    setHeight(intValue);

    if (selectedObject && selectedObject.type === "rect" && intValue >= 0) {
      selectedObject.set({ height: intValue / selectedObject.scaleY });
      canvas.renderAll();
    }
  };

  const handleDiameterChange = (e) => {
    const value = e.target.value.replace(/,/g, "");
    const intValue = parseInt(value, 10);
    setDiameter(intValue);

    if (selectedObject && selectedObject.type === "circle" && intValue >= 0) {
      selectedObject.set({ radius: intValue / 2 / selectedObject.scaleY });
      canvas.renderAll();
    }
  };
  const handleColorChange = (e) => {
    const value = e.target.value;
    setColor(value);

    if (selectedObject) {
      selectedObject.set({ fill: value });
      canvas.renderAll();
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 gap-2 flex flex-col bg-neutral-500 px-6 py-2 empty:hidden">
      {selectedObject && selectedObject.type === "rect" && (
        <>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="rectWidth">Width</Label>
            <Input
              id="rectWidth"
              type="text"
              value={width}
              // placeholder="Height"
              onChange={handleWidthChange}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="rectHeight">Height</Label>
            <Input
              id="rectHeight"
              type="text"
              value={height}
              // placeholder="Height"
              onChange={handleHeightChange}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="rectColor">Color</Label>
            <Input
              id="rectColor"
              type="color"
              value={color}
              // placeholder="Height"
              onChange={handleColorChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Settings;
