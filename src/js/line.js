import *as THREE from 'three'

const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth,window.indexedDB,0.1,1000)
renderer.setSize(window.innerWidth, window.innerHeight)