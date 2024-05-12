import * as THREE from "/node_modules/three/build/three.module.js";

import { paintingData } from './paintingData.js';

export function createPaintings(scene, textureLoader) {
 
  console.log(paintingData)
  let paintings = [];

  paintingData.forEach((data) => {
   
    const painting = new THREE.Mesh( 
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshLambertMaterial({ map: textureLoader.load(data.imgSrc) })
    );

    painting.position.set(data.position.x, data.position.y, data.position.z); 
    painting.rotation.y = data.rotationY; 

    
    painting.userData = {
      type: 'painting', 
      info: data.info, 
      url: data.info.link
    };

    painting.castShadow = true; 
    painting.receiveShadow = true; 

    paintings.push(painting); 
  });

  return paintings; 
}
