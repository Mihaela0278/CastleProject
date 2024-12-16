import { createCamera } from "./components/camera";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/Loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";
import { createCastle } from "./components/castle";

export class World {
  camera;
  scene;
  renderer;
  loop;

  constructor(container) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.renderer, this.scene);

    const controls = createControls(this.camera, this.renderer.domElement);

    createCastle((castle) => {
      this.scene.add(castle.scene);
    });

    container.append(this.renderer.domElement);

    this.loop.addUpdatable(controls);

    const { mainLight } = createLights();

    this.scene.add(mainLight);

    const resizer = new Resizer(container, this.camera, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}
