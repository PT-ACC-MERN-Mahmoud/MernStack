import './style.css'

import * as THREE from 'three';  //with this import we can start creating our 3d environment

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
//Add a Scene
const scene = new THREE.Scene(); //  First we creat a scene that will be our container.

//Add a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //.01, 1000 will indicate that we can see everything from the camera lense

//Add a renderer
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),
}); //the renderer needs to know what DOM element it will be using.

renderer.setPixelRatio(window.devicePixelRatio); // we want to set the pixel ratio equal to that of any particular devices renderer.

renderer.setSize(window.innerWidth, window.innerHeight);

//Animate Camera
camera.position.setZ(30); //The camera is set in the middle of the screen. This code will animate the camera by moving it along the Z-axis.

//Pass the scene and Cam to the renderer
renderer.render(scene, camera); //Here we call the renderer's render method passing in the scene and the camera. At this point we will be rendering a blank screen.

//Add a geometric object to the scene
const geometry = new THREE.TorusGeometry(10,3,16,100)  //we need to add geometric figures to our scene for the 3d effect.


const material = new THREE.MeshStandardMaterial({color: 0xff6347, wireframe: true }); //This is the material that we will wrap our  geoM. object in.

const torus = new THREE.Mesh(geometry, material); //we need to add a meterial for our geometric figures.

scene.add(torus)

//Adding Lights to the scene
const pointLight = new THREE.PointLight

const PointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5); //set lighting position.

const ambientLight = new THREE.AmbientLight(0xffffff); //ambientLight is for a fuller, wider view of the scene.
scene.add(pointLight, ambientLight); //we need to add the light to the scene just like any other object.

//Adding light and grid helpers
const lightHelper = new THREE.PointLightHelper(pointLight); //give us a wireframe helping us to know the location of the pointLight
//const gridHelper = new THREE.GridHelper(200, 50);

scene.add(lightHelper);//, gridHelper);

//adding scene navigation functionality
const controls = new OrbitControls(camera, renderer.domElement); //this will enable us the pan around the scene with our mouse.

//adding stars to the scene
function addStar() { //this function will enable us to add stars to the scene.
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff })
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );  //Here we are creating an array with 3 values, fill them with random numbers between -100 and 100.
  star.position.set(x, y, z); //here, we set each star position to its random x,y,z position
  scene.add(star)




}

Array(200).fill().forEach(addStar) //Here, we decide how many starts we want in our scene by creating an array and filling it with each star.

//adding a bg
const spaceTexture = new THREE.TextureLoader().load('stars-night-sky.jpg');  //Here, we create a background
scene.background = spaceTexture; //Here we set the background to the screen

//adding a cubegeo to photo texture
const jamalTexture = new THREE.TextureLoader().load('Me for 3d.jpg'); // Here, we create a texture from a photo

const jamal = new THREE.Mesh(  //Here we create a mesh for our photobox
  new THREE.BoxGeometry(5,3,3), //Here, we create a geometric cube for our texture
  new THREE.MeshBasicMaterial({map: jamalTexture}) //Here, we map the phototexture and boxGeometry. 
);

scene.add(jamal);

//adding a moon
const moonTexture = new THREE.TextureLoader().load('poles-moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal moon text.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(25, 32, 32),
  new THREE.MeshStandardMaterial( {  
    map: moonTexture, 
    normalMap: normalTexture
  } )
);
moon.position.z = 10;
moon.position.setX(20);
jamal.position.z = -5;
jamal.position.x = 2;
scene.add(moon);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.75;
  moon.position.z += 0.05;

  jamal.rotation.y += 0.01;
  jamal.rotation.x += 0.01;

  camera.position.z = t * -0.1;
  camera.position.x = t * -0.05;
  camera.position.y = t * -0.07;

}
document.body.onscroll = moveCamera





//adding a recursive function the calls the renderer method everytime we trigger animation
function animate() {
  requestAnimationFrame(animate); // we dont want to call the renderer method every single time so setting up a recurring loop is better
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera); // now that we have a scene, a figure, and a camera, we should see the figure in the scene, after calling the animate function
}
animate()

  




