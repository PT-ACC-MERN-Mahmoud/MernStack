import './style.css'

import * as THREE from 'three';
import { AmbientLight } from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);//
camera.position.set(-900,-200,-900)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')//, antialias:true
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);
camera.position.setZ(30);

renderer.render( scene, camera );

//const geometry = new THREE.BoxGeometry(20,20,20,5,5,1,)
//const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );

let skyboxGeo = new THREE.BoxGeometry(20, 20,20, 5,1,1);
let skybox = new THREE.Mesh( skyboxGeo, materialArray );
const box = new THREE.BoxHelper( skybox, 0xffff00 );
let materialArray = [];

let texture_ft = new THREE.TextureLoader().load( 'bay_ft.jpg' );
let texture_bk = new THREE.TextureLoader().load( 'bay_bk.jpg' );
let texture_up = new THREE.TextureLoader().load( 'bay_up.jpg' );
let texture_dn = new THREE.TextureLoader().load( 'bay_dn.jpg' );
let texture_rt = new THREE.TextureLoader().load( 'bay_rt.jpg' );
let texture_lf = new THREE.TextureLoader().load( 'bay_lf.jpg' );

materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk}));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn}));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf}));

for (let i = 0; i< 6; i++)
  materialArray[i].side = THREE.BackSide;
scene.add( skybox );
//scene.add( cube );

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

function animate() {
  requestAnimationFrame( animate );


  //cube.rotation.z += 0.01;
  //cube.rotation.y += 0.002;
  //cube.rotation.z += 0.0001;

  renderer.render( scene, camera);
}
animate()




