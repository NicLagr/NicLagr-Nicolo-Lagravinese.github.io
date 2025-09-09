import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Bust Component
const Bust = ({ materialMode, mousePosition }) => {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/assets/3d/nicolo-bust.glb');
  
  // Clone the scene to avoid modifying the original
  const scene = gltf.scene.clone();
  
  // Create materials
  const clayMaterial = new THREE.MeshStandardMaterial({
    color: '#8B7355',
    roughness: 0.8,
    metalness: 0.1,
  });
  
  const matcapMaterial = new THREE.MeshMatcapMaterial({
    color: '#9D4EDD',
  });
  
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: '#00FFFF',
    wireframe: true,
  });
  
  // Apply material to all meshes in the scene
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        switch (materialMode) {
          case 'clay':
            child.material = clayMaterial;
            break;
          case 'matcap':
            child.material = matcapMaterial;
            break;
          case 'wireframe':
            child.material = wireframeMaterial;
            break;
          default:
            child.material = clayMaterial;
        }
      }
    });
  }, [materialMode, scene, clayMaterial, matcapMaterial, wireframeMaterial]);
  
  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle idle bob
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Mouse parallax rotation (±10°)
      const maxRotation = Math.PI / 18; // 10 degrees
      meshRef.current.rotation.y = (mousePosition.x - 0.5) * maxRotation;
      meshRef.current.rotation.x = (mousePosition.y - 0.5) * maxRotation * 0.5;
    }
  });
  
  return (
    <primitive 
      ref={meshRef} 
      object={scene} 
      scale={[2, 2, 2]} 
      position={[0, -1, 0]} 
    />
  );
};

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full bg-black/20 rounded-lg border border-cyan-500/30">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400 text-sm">Loading 3D model...</p>
    </div>
  </div>
);

const VaporwaveBust = () => {
  const [materialMode, setMaterialMode] = useState('clay');
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef();
  
  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Mouse tracking for parallax
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        setMousePosition({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)) });
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [prefersReducedMotion]);
  
  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key.toLowerCase()) {
        case 'w':
          setMaterialMode(prev => prev === 'wireframe' ? 'clay' : 'wireframe');
          break;
        case 'm':
          setMaterialMode(prev => prev === 'matcap' ? 'clay' : 'matcap');
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
  
  // Click to cycle materials
  const cycleMaterial = () => {
    setMaterialMode(prev => {
      switch (prev) {
        case 'clay': return 'matcap';
        case 'matcap': return 'wireframe';
        case 'wireframe': return 'clay';
        default: return 'clay';
      }
    });
  };
  
  return (
    <div className="space-y-4">
      {/* 3D Canvas Container */}
      <div 
        ref={containerRef}
        className="relative bg-black/20 border border-cyan-500/30 rounded-lg overflow-hidden cursor-pointer group"
        style={{ height: '400px' }}
        onClick={cycleMaterial}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && cycleMaterial()}
        aria-label={`3D bust in ${materialMode} mode. Click or press Enter to cycle materials. Press W for wireframe, M for matcap.`}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            style={{ background: 'transparent' }}
          >
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={1} 
              color="#ffffff"
            />
            <directionalLight 
              position={[-10, -10, -5]} 
              intensity={0.5} 
              color="#9D4EDD"
            />
            <pointLight 
              position={[0, 0, 10]} 
              intensity={0.3} 
              color="#00FFFF"
            />
            
            {/* 3D Model */}
            <Bust 
              materialMode={materialMode} 
              mousePosition={prefersReducedMotion ? { x: 0.5, y: 0.5 } : mousePosition}
            />
            
            {/* Optional: Enable manual camera controls */}
            {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
          </Canvas>
        </Suspense>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        
        {/* Material indicator */}
        <div className="absolute top-2 right-2 bg-black/70 text-cyan-400 text-xs px-2 py-1 rounded font-mono">
          {materialMode.toUpperCase()}
        </div>
      </div>
      
      {/* Controls hint */}
      <div className="text-center text-gray-400 text-sm">
        <p className="font-mono">
          Click to cycle • W = wireframe • M = matcap
        </p>
        {!prefersReducedMotion && (
          <p className="text-xs mt-1">Move mouse for parallax</p>
        )}
      </div>
    </div>
  );
};

export default VaporwaveBust;
