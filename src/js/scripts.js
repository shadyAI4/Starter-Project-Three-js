import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// create scene

const scene =new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

// creating a axeshelper
const orbit = new OrbitControls(camera, renderer.domElement)
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0,2,5);
orbit.update()
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color:0x06FF00,side:THREE.DoubleSide});
const box = new THREE.Mesh(boxGeometry,boxMaterial);

scene.add(box);

// creating a plane Geometry

const planeGeometry = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshBasicMaterial({color:0xFFFFF});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x=0.5 * Math.PI;
scene.add(plane);

// create a sphere 

const sphereGeometry = new THREE.SphereGeometry(4,50,50);
const sphereMaterial = new THREE.MeshBasicMaterial({color:0xFF05F,wireframe:true});
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
scene.add(sphere);

// add Grid helper

const gridHelper = new THREE.GridHelper(30,70);
scene.add(gridHelper);


function animate(time){
    box.rotation.x=time /1000;
    box.rotation.y = time /1000
    renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);