import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RoundedBox, ContactShadows, Html } from "@react-three/drei";
import * as THREE from "three";

function shade(hex, amount) {
  // amount: -1 (darker) to 1 (lighter)
  const c = new THREE.Color(hex);
  if (amount >= 0) c.lerp(new THREE.Color("#ffffff"), amount);
  else c.lerp(new THREE.Color("#000000"), -amount);
  return c;
}

function SneakerModel({ color }) {
  const group = useRef();
  const base = shade(color, 0);
  const sole = shade(color, 0.75);
  const dark = shade(color, -0.55);

  return (
    <group ref={group} rotation={[0.05, 0.6, 0]}>
      {/* outsole */}
      <RoundedBox args={[1.05, 0.22, 2.5]} radius={0.1} smoothness={4} position={[0, -0.62, 0.05]}>
        <meshStandardMaterial color={sole} roughness={0.8} />
      </RoundedBox>
      {/* midsole */}
      <RoundedBox args={[1, 0.16, 2.35]} radius={0.09} smoothness={4} position={[0, -0.45, 0.05]}>
        <meshStandardMaterial color={"#f2f2ed"} roughness={0.6} />
      </RoundedBox>
      {/* main upper body */}
      <RoundedBox args={[0.88, 0.5, 1.75]} radius={0.22} smoothness={4} position={[0, -0.14, -0.05]}>
        <meshStandardMaterial color={base} roughness={0.55} />
      </RoundedBox>
      {/* toe box */}
      <RoundedBox args={[0.72, 0.36, 0.55]} radius={0.2} smoothness={4} position={[0, -0.2, 1.05]}>
        <meshStandardMaterial color={base} roughness={0.55} />
      </RoundedBox>
      {/* heel counter */}
      <RoundedBox args={[0.78, 0.56, 0.4]} radius={0.16} smoothness={4} position={[0, -0.05, -1.05]}>
        <meshStandardMaterial color={dark} roughness={0.5} />
      </RoundedBox>
      {/* tongue */}
      <RoundedBox
        args={[0.42, 0.32, 0.34]}
        radius={0.08}
        smoothness={4}
        position={[0, 0.22, 0.15]}
        rotation={[0.35, 0, 0]}
      >
        <meshStandardMaterial color={dark} roughness={0.7} />
      </RoundedBox>
      {/* laces */}
      {[-0.28, -0.08, 0.12, 0.32].map((z, i) => (
        <RoundedBox
          key={i}
          args={[0.62, 0.05, 0.09]}
          radius={0.02}
          smoothness={2}
          position={[0, 0.16 - i * 0.02, z]}
          rotation={[0, 0, i % 2 === 0 ? 0.35 : -0.35]}
        >
          <meshStandardMaterial color="#f2f2ed" roughness={0.9} />
        </RoundedBox>
      ))}
    </group>
  );
}

function TeeModel({ color }) {
  const base = shade(color, 0);
  const dark = shade(color, -0.4);

  return (
    <group rotation={[0, 0.5, 0]}>
      {/* torso */}
      <RoundedBox args={[1.5, 1.7, 0.18]} radius={0.15} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial color={base} roughness={0.75} />
      </RoundedBox>
      {/* left sleeve */}
      <RoundedBox
        args={[0.55, 0.5, 0.18]}
        radius={0.12}
        smoothness={4}
        position={[-1.05, 0.55, 0]}
        rotation={[0, 0, -0.35]}
      >
        <meshStandardMaterial color={base} roughness={0.75} />
      </RoundedBox>
      {/* right sleeve */}
      <RoundedBox
        args={[0.55, 0.5, 0.18]}
        radius={0.12}
        smoothness={4}
        position={[1.05, 0.55, 0]}
        rotation={[0, 0, 0.35]}
      >
        <meshStandardMaterial color={base} roughness={0.75} />
      </RoundedBox>
      {/* collar ribbing */}
      <mesh position={[0, 0.82, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.28, 0.06, 12, 24, Math.PI]} />
        <meshStandardMaterial color={dark} roughness={0.8} />
      </mesh>
      {/* chest print swatch */}
      <RoundedBox args={[0.45, 0.45, 0.02]} radius={0.04} smoothness={2} position={[0, -0.05, 0.11]}>
        <meshStandardMaterial color={dark} roughness={0.9} />
      </RoundedBox>
    </group>
  );
}

export default function Product3DViewer({ category, colorHex, brand }) {
  return (
    <div className="relative aspect-square bg-surface overflow-hidden">
      <Canvas camera={{ position: [0, 0.6, 3.4], fov: 38 }} shadows dpr={[1, 1.5]}>
        <color attach="background" args={["#16161A"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 2]} intensity={1.1} castShadow />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} />
        <Suspense fallback={null}>
          {category === "shoes" ? (
            <SneakerModel color={colorHex} />
          ) : (
            <TeeModel color={colorHex} />
          )}
          <ContactShadows position={[0, -0.95, 0]} opacity={0.5} blur={2.4} scale={4} far={2} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2.4}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.9}
        />
        <Html position={[0, -1.35, 0]} center transform={false}>
          <div className="font-tag text-[10px] uppercase tracking-widest text-mute whitespace-nowrap pointer-events-none">
            Drag to rotate 360°
          </div>
        </Html>
      </Canvas>
      <div className="absolute top-3 left-3 bg-ink/80 border border-cyan/40 text-cyan font-tag text-[11px] font-bold px-2.5 py-1 pointer-events-none">
        {brand?.toUpperCase()}
      </div>
    </div>
  );
}
