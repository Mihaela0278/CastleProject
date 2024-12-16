import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import castleFile from '../models/castle_final.glb'

export function createCastle(onLoad) {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  loader.setDRACOLoader(dracoLoader);
  dracoLoader.setDecoderPath("/examples/jsm/libs/draco/");

  loader.load(castleFile, onLoad)
}
