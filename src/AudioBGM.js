import React, { Component } from "react";
import music from "./Music/BGM/Game.mp3";

function Audio2() {
  return (
    <div className="Audio">
      <audio src={music} id="BGM" volume="0.2" />
    </div>
  );
}

export default Audio2;
