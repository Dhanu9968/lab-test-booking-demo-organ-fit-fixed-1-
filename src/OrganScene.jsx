import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, Html, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const organAssets = {
  Diabetes: { image: "/images/organs/pancreas.webp" },
  Liver: { image: "/images/organs/liver.webp" },
  Thyroid: { image: "/images/organs/thyroid.webp" },
  Kidney: { image: "/images/organs/kidneys.webp" },
  Heart: { image: "/images/organs/heart.webp" },
  Lungs: { image: "/images/organs/lungs.webp" },
  Bone: { image: "/images/organs/bone.webp" },
  Pregnancy: { image: "/images/organs/pregnancy.webp" },
  Cancer: { image: "/images/organs/cancer.webp" },
};

function LoadedOrgan({ url }) {
  const { scene } = useGLTF(url);
  const model = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material = child.material.clone();
          child.material.side = THREE.DoubleSide;
        }
      }
    });
    return clone;
  }, [scene]);

  return (
    <Bounds fit clip observe margin={1.25}>
      <Center>
        <primitive object={model} />
      </Center>
    </Bounds>
  );
}

function ModelCanvas({ url }) {
  return (
    <Canvas
      className="organ-canvas"
      camera={{ position: [0, 0, 4.5], fov: 38 }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.35} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} castShadow />
      <directionalLight position={[-4, 1, -3]} intensity={1.2} color="#8bdcff" />
      <Suspense fallback={<Html center><span className="model-loading">Loading 3D anatomy…</span></Html>}>
        <LoadedOrgan url={url} />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={true} minDistance={2.3} maxDistance={8} autoRotate autoRotateSpeed={1.1} />
    </Canvas>
  );
}

export default function OrganScene({ organ = "Liver" }) {
  const asset = organAssets[organ] || organAssets.Liver;

  if (asset.model) {
    return (
      <div className="organ-canvas-wrap" aria-label={`Interactive 3D ${organ} model`}>
        <ModelCanvas url={asset.model} />
        <span className="model-caption"><span /> REAL 3D MODEL · DRAG TO ROTATE</span>
      </div>
    );
  }

  return (
    <div className="organ-image-stage" aria-label={`${organ} anatomical illustration`}>
      <div className="organ-image-glow" />
      <img src={asset.image} alt={`${organ} anatomical illustration`} className="organ-feature-image" />
      <span className="model-caption"><span /> ANATOMICAL PREVIEW</span>
    </div>
  );
}
