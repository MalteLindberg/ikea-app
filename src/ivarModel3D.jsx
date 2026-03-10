import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import ivar3dFile from "../assets/Ivar1.glb";

export default function IvarViewer3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    mount.appendChild(renderer.domElement);

    // --- Scene ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#f5f5f3");

    // --- Camera ---
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 3.5);

    // --- Lighting ---
    // Soft ambient
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    // Key light — warm, from upper left
    const keyLight = new THREE.DirectionalLight(0xfff4e0, 2.2);
    keyLight.position.set(-3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 20;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Fill light — cool, from right
    const fillLight = new THREE.DirectionalLight(0xd0e8ff, 1.0);
    fillLight.position.set(4, 2, -2);
    scene.add(fillLight);

    // Rim/back light — subtle warm edge definition
    const rimLight = new THREE.DirectionalLight(0xffe0b0, 0.6);
    rimLight.position.set(0, -2, -4);
    scene.add(rimLight);

    // Ground bounce
    const groundLight = new THREE.HemisphereLight(0xffffff, 0xd0c8b0, 0.4);
    scene.add(groundLight);

    // Shadow plane
    const planeGeo = new THREE.PlaneGeometry(10, 10);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.01;
    plane.receiveShadow = true;
    scene.add(plane);

    // --- Load GLB ---
    const controls = {
      target: new THREE.Vector3(0, 0.8, 0),
      spherical: new THREE.Spherical(3.5, Math.PI / 3, 0),
    };

    const loader = new GLTFLoader();
    loader.load(
      ivar3dFile,
      (gltf) => {
        const model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.needsUpdate = true;
            }
          }
        });

        // Center and fit model to view
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2.5 / maxDim;

        model.scale.setScalar(scale);
        model.position.sub(center.multiplyScalar(scale));

        // Sit model on shadow plane
        const box2 = new THREE.Box3().setFromObject(model);
        model.position.y -= box2.min.y;

        scene.add(model);

        // Re-aim camera at model center
        const box3 = new THREE.Box3().setFromObject(model);
        const center3 = box3.getCenter(new THREE.Vector3());
        controls.target.copy(center3);
        updateCamera();
      },
      undefined,
      (err) => console.error("GLB load error:", err)
    );

    // --- Touch & Mouse Controls ---
    let isDragging = false;
    let lastTouch = { x: 0, y: 0 };
    let lastPinchDist = null;
    let lastPinchMid = null;

    function updateCamera() {
      const pos = new THREE.Vector3().setFromSpherical(controls.spherical);
      camera.position.copy(pos.add(controls.target));
      camera.lookAt(controls.target);
    }
    updateCamera();

    function onPointerDown(e) {
      isDragging = true;
      lastTouch.x = e.clientX;
      lastTouch.y = e.clientY;
    }
    function onPointerMove(e) {
      if (!isDragging) return;
      const dx = e.clientX - lastTouch.x;
      const dy = e.clientY - lastTouch.y;
      controls.spherical.theta -= dx * 0.008;
      controls.spherical.phi = Math.max(0.15, Math.min(Math.PI - 0.1, controls.spherical.phi + dy * 0.008));
      lastTouch.x = e.clientX;
      lastTouch.y = e.clientY;
      updateCamera();
    }
    function onPointerUp() {
      isDragging = false;
    }

    function onWheel(e) {
      controls.spherical.radius = Math.max(1.2, Math.min(8, controls.spherical.radius + e.deltaY * 0.005));
      updateCamera();
    }

    function getTouchDist(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function getTouchMid(touches) {
      return {
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2,
      };
    }

    function onTouchStart(e) {
      e.preventDefault();
      if (e.touches.length === 1) {
        isDragging = true;
        lastTouch.x = e.touches[0].clientX;
        lastTouch.y = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        isDragging = false;
        lastPinchDist = getTouchDist(e.touches);
        lastPinchMid = getTouchMid(e.touches);
      }
    }

    function onTouchMove(e) {
      e.preventDefault();
      if (e.touches.length === 1 && isDragging) {
        const dx = e.touches[0].clientX - lastTouch.x;
        const dy = e.touches[0].clientY - lastTouch.y;
        controls.spherical.theta -= dx * 0.008;
        controls.spherical.phi = Math.max(0.15, Math.min(Math.PI - 0.1, controls.spherical.phi + dy * 0.008));
        lastTouch.x = e.touches[0].clientX;
        lastTouch.y = e.touches[0].clientY;
        updateCamera();
      } else if (e.touches.length === 2 && lastPinchDist !== null) {
        // --- Pinch zoom ---
        const dist = getTouchDist(e.touches);
        const delta = lastPinchDist - dist;
        controls.spherical.radius = Math.max(1.2, Math.min(8, controls.spherical.radius + delta * 0.012));
        lastPinchDist = dist;

        // --- Two-finger pan (shift the orbit target) ---
        const mid = getTouchMid(e.touches);
        if (lastPinchMid) {
          const panX = mid.x - lastPinchMid.x;
          const panY = mid.y - lastPinchMid.y;

          // Build camera-relative right and up vectors for panning
          const panSpeed = controls.spherical.radius * 0.0018;
          const right = new THREE.Vector3();
          const up = new THREE.Vector3();
          camera.matrix.extractBasis(right, up, new THREE.Vector3());

          controls.target.addScaledVector(right, -panX * panSpeed);
          controls.target.addScaledVector(up, panY * panSpeed);
        }
        lastPinchMid = mid;

        updateCamera();
      }
    }

    function onTouchEnd(e) {
      if (e.touches.length < 2) {
        lastPinchDist = null;
        lastPinchMid = null;
      }
      if (e.touches.length === 0) isDragging = false;
    }

    const canvas = renderer.domElement;
    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: true });
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    // --- Render loop ---
    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

    // --- Resize ---
    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(canvas)) mount.removeChild(canvas);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        flex: 1,
        minHeight: 0,
        borderRadius: "8px",
        overflow: "hidden",
        touchAction: "none",
        cursor: "grab",
      }}
    />
  );
}