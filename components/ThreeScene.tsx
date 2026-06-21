"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = mountRef.current;
    if (!el) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 1000);
    camera.position.set(0, 0, 5.5);

    // Main icosahedron — large in hero, grows further on scroll
    const geo = new THREE.IcosahedronGeometry(2.2, 2);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x1377ff,
      wireframe: true,
      transparent: true,
      opacity: 0.13,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(0, 0, 0);
    mesh.scale.setScalar(1.0);
    scene.add(mesh);


    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let raf: number;

    const maxScroll = () =>
      Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const handleScroll = () => { scrollY = window.scrollY; };
    const handleMouse = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    const handleResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    let baseRotX = 0;
    let baseRotY = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const progress = scrollY / maxScroll();

      if (!prefersReduced) {
        baseRotY += 0.003;
        baseRotX += 0.0012;

        // Grows from large (hero) to very large as user scrolls
        const scale = 1.4 + progress * 2.0;
        mesh.scale.setScalar(scale);

        // Drifts gently as page scrolls
        mesh.position.x = Math.sin(progress * Math.PI * 1.2) * 1.5;
        mesh.position.y = -progress * 1.5;
        mesh.position.z = Math.sin(progress * Math.PI) * -1.2;

        mesh.rotation.y = baseRotY + progress * Math.PI * 2.5 + mouseX * 0.2;
        mesh.rotation.x = baseRotX + progress * Math.PI * 0.8 + mouseY * 0.15;

        mat.opacity = 0.16 - progress * 0.08; // fades slightly on scroll

        camera.position.x = mouseX * 0.12;
        camera.position.y = mouseY * 0.08;
        camera.lookAt(0, 0, 0);
      }

      renderer.render(scene, camera);
    };

    if (!prefersReduced) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("mousemove", handleMouse, { passive: true });
    }
    window.addEventListener("resize", handleResize);
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      className="three-scene"
    />
  );
}
