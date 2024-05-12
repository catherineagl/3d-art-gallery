import * as THREE from "three";
import floorColor from "../public/WoodFloor040_4K-JPG/WoodFloor040_4K-JPG_Color.jpg";
import floorDisplacementTexture from "../public/WoodFloor040_4K-JPG/WoodFloor040_4K-JPG_Displacement.jpg";
import floorNormalTexture from "../public/WoodFloor040_4K-JPG/WoodFloor040_4K-JPG_NormalGL.jpg";
import floorRoughnessTexture from "../public/WoodFloor040_4K-JPG/WoodFloor040_4K-JPG_Roughness.jpg";
import floorAoTexture from "../public/WoodFloor040_4K-JPG/WoodFloor040_4K-JPG_AmbientOcclusion.jpg";

export const setupFloor = async (scene) => {
  const textureLoader = new THREE.TextureLoader();
  let i = 0;

  // Load the textures
  const colorTexture = await loadTexture(floorColor)

  const displacementTexture = await loadTexture(floorDisplacementTexture);
  const normalTexture = await loadTexture(floorNormalTexture);
  const roughnessTexture = await loadTexture(floorRoughnessTexture);
  const aoTexture = await loadTexture(floorAoTexture);

  // Set texture parameters
  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;

  const planeGeometry = new THREE.PlaneGeometry(45, 45);
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    aoMap: aoTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });

  const floorPlane = new THREE.Mesh(planeGeometry, planeMaterial);

  floorPlane.rotation.x = Math.PI / 2;
  floorPlane.position.y = -Math.PI;

  scene.add(floorPlane);
};

const loadTexture = (img) => {
  return new Promise((resolve, reject) => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      img,
      (texture) => {
        resolve(texture);
      },
      undefined,
      (err) => {
        console.error("Error loading texture:", err);
        reject(err);
      }
    );
  });
};



