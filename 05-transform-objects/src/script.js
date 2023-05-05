import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes Helper
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// default x,y,z is (0, 0, 0)
// mesh.position.set(0.7, - 0.6, 1)
// mesh.position.x = 0.7
// mesh.position.y = - 0.6
// mesh.position.z = 1

// By default, x, y and z are equal to 1, meaning that the object has no scaling applied. 
// mesh.scale.x = 2
// mesh.scale.y = 0.25
// mesh.scale.z = 0.5

mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
// mesh.rotation.z = Math.PI * 0.25

console.log(mesh.position.length())

// scene.add(mesh)

const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.2
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube1.position.x = - 1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube3.position.x = 1.5
group.add(cube3)

group.scale.x = 0.5
scene.add(group)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

// The object will automatically rotate its -z axis toward the target you provided
camera.lookAt(new THREE.Vector3(0, - 1, 0))
// We can also use any existing Vector3 such as the mesh's position, but that will result in the default camera position because our mesh is in the center of the scene.
// camera.lookAt(mesh.position)

scene.add(camera)

console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)