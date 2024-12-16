import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.maxPolarAngle = Math.PI / 2.08;
  controls.minDistance = 5;
  controls.maxDistance = 80;
  controls.tick = (delta) => {
    controls.update();
  };
  return controls;
}
