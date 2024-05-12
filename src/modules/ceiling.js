import * as THREE from "three";
import ceilingColor from "/OfficeCeiling005_4K-JPG/OfficeCeiling005_4K-JPG_Color.jpg";
import ceilingDisplacement from "/OfficeCeiling005_4K-JPG/OfficeCeiling005_4K-JPG_Displacement.jpg";
import ceilingAoTexture from "/OfficeCeiling005_4K-JPG/OfficeCeiling005_4K-JPG_AmbientOcclusion.jpg";
import ceilingEmission from "/OfficeCeiling005_4K-JPG/OfficeCeiling005_4K-JPG_Emission.jpg";
import ceilingMetalness from "/OfficeCeiling005_4K-JPG/OfficeCeiling005_4K-JPG_Metalness.jpg";
import ceilingNormalGL from "/OfficeCeiling005_4K-JPG/OfficeCeiling005_4K-JPG_NormalGL.jpg";
import ceilingRoughness from "/OfficeCeiling005_4K-JPG/OfficeCeiling005_4K-JPG_Roughness.jpg";

// create a function that takes a scene and a textureLoader as arguments that will be passed in from main.js where the createCeiling is called
export const createCeiling = async (scene, textureLoader) => {
  // Load the textures
  const colorTexture = await loadTexture(ceilingColor);
  const displacementTexture = await loadTexture(ceilingDisplacement);
  const aoTexture = await loadTexture(ceilingAoTexture);
  const emissionTexture = await loadTexture(ceilingEmission);
  const metalnessTexture = await loadTexture(ceilingMetalness);
  const normalGLTexture = await loadTexture(ceilingNormalGL);
  const roughnessTexture = await loadTexture(ceilingRoughness);

  // Set texture parameters
  colorTexture.wrapS = colorTexture.wrapT = THREE.RepeatWrapping;
  displacementTexture.wrapS = displacementTexture.wrapT = THREE.RepeatWrapping;
  aoTexture.wrapS = aoTexture.wrapT = THREE.RepeatWrapping;
  emissionTexture.wrapS = emissionTexture.wrapT = THREE.RepeatWrapping;
  metalnessTexture.wrapS = metalnessTexture.wrapT = THREE.RepeatWrapping;
  normalGLTexture.wrapS = normalGLTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const ceilingGeometry = new THREE.PlaneGeometry(45, 40);
  const ceilingMaterial = new THREE.MeshLambertMaterial({
    map: colorTexture,
    displacementMap: displacementTexture,
    aoMap: aoTexture,
    emissiveMap: emissionTexture,
    metalnessMap: metalnessTexture,
    normalMap: normalGLTexture,
    normalMapType: THREE.NormalMap,
    roughnessMap: roughnessTexture,
    displacementScale: 0.1,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 10;

  scene.add(ceilingPlane);
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