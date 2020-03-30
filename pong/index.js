import { Pong } from "./components/Pong.js";

const canvas = document.getElementById("gamepad");
const game = new Pong(canvas);
game.drawGamePad();
