// ===== チャピカート Ver0.1 =====

// シーン
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// カメラ
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// レンダラー
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("game"),
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

// 地面
const groundGeometry = new THREE.PlaneGeometry(200, 200);
const groundMaterial = new THREE.MeshLambertMaterial({
    color: 0x3cb043
});

const ground = new THREE.Mesh(groundGeometry, groundMaterial);

ground.rotation.x = -Math.PI / 2;

scene.add(ground);

// ライト
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(20, 40, 20);
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff, 0.6));

// ===== カート =====

// 車体
const body = new THREE.Mesh(
    new THREE.BoxGeometry(2, 0.7, 4),
    new THREE.MeshLambertMaterial({
        color: 0xff3333
    })
);

body.position.y = 0.8;

scene.add(body);

// カメラ位置
camera.position.set(0, 5, 8);
camera.lookAt(body.position);

// ===== ループ =====

function animate() {

    requestAnimationFrame(animate);

    camera.lookAt(body.position);

    renderer.render(scene, camera);

}

animate();
