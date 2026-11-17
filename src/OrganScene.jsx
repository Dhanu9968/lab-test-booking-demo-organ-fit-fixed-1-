
import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  Center,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

// All nine animated GIF images
const organAssets = {
  diabetes: "/gifs/diabetes.gif",
  liver: "/gifs/liver.gif",
  thyroid: "/gifs/thyroid.gif",
  kidney: "/gifs/kidney.gif",
  heart: "/gifs/heart.gif",
  lungs: "/gifs/lungs.gif",
  bone: "/gifs/bone.gif",
  pregnancy: "/gifs/pregnancy.gif",
  cancer: "/gifs/cancer.gif",
};

const normalizeOrgan = (value) => {
  const name = String(
    typeof value === "object" && value !== null
      ? value.name || value.id || ""
      : value || ""
  ).toLowerCase().trim();

  const aliases = {
    kidneys: "kidney",
    lung: "lungs",
    bones: "bone",
  };

  return aliases[name] || name;
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

      <directionalLight
        position={[4, 5, 6]}
        intensity={2.2}
        castShadow
      />

      <directionalLight
        position={[-4, 1, -3]}
        intensity={1.2}
        color="#8bdcff"
      />

      <Suspense
        fallback={
          <Html center>
            <span className="model-loading">
              Loading 3D anatomy…
            </span>
          </Html>
        }
      >
        <LoadedOrgan url={url} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={2.3}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={1.1}
      />
    </Canvas>
  );
}

export default function OrganScene({ organ = "Liver" }) {
  const organKey = normalizeOrgan(organ);
  const gifPath = organAssets[organKey] || organAssets.liver;

  console.log("Selected organ:", organ);
  console.log("GIF path:", gifPath);

  return (
    <div
      className="organ-image-stage"
      aria-label={`${organKey} animated anatomical preview`}
    >
      <div className="organ-image-glow" />

      <img
        key={gifPath}
        src={gifPath}
        alt={`${organKey} animated anatomy`}
        className="organ-feature-image"
        onError={(e) => {
          console.error("GIF not found:", gifPath);
        }}
      />

      <span className="model-caption">
        <span /> ANIMATED ANATOMICAL PREVIEW
      </span>
    </div>
  );
}