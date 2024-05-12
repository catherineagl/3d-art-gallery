import * as THREE from "three";
import wallNormalTexture from "../public/leather_white_4k.blend/textures/leather_white_diff_4k.jpg";
import wallRougnessTexture from "../public/leather_white_4k.blend/textures/leather_white_rough_4k.jpg";
export async function createWalls(scene, textureLoader) {
  let wallGroup = new THREE.Group();
  scene.add(wallGroup);

  const normalTexture = await loadTexture(wallNormalTexture);
  const roughnessTexture = await loadTexture(wallRougnessTexture);

  normalTexture.wrapS = normalTexture.wrapT = THREE.RepeatWrapping;
  roughnessTexture.wrapS = roughnessTexture.wrapT = THREE.RepeatWrapping;

  const wallMaterial = new THREE.MeshStandardMaterial({
    color: 0xadadae,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    side: THREE.DoubleSide,
  });
  // Front Wall
  const frontWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );

  frontWall.position.z = -20;

  // Left Wall
  const leftWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );

  leftWall.rotation.y = Math.PI / 2;
  leftWall.position.x = -20;

  // Right Wall
  const rightWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );

  rightWall.position.x = 20;
  rightWall.rotation.y = Math.PI / 2;

  // Back Wall
  const backWall = new THREE.Mesh(
    new THREE.BoxGeometry(80, 20, 0.001),
    wallMaterial
  );
  backWall.position.z = 20;

  wallGroup.add(frontWall, backWall, leftWall, rightWall);

  return wallGroup;
}

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