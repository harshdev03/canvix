"use client";

import React from "react";
import { Tldraw} from "tldraw";
import "tldraw/tldraw.css"

const Canvas = () => {

  return (
    <div className="fixed inset-0 z-0">
      <Tldraw
        inferDarkMode={true} 
      />
    </div>
  );
};

export default Canvas;
