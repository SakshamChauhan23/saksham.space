"use client";

import dynamic from "next/dynamic";

export const ThreeSceneClient = dynamic(
  () => import("./ThreeScene"),
  { ssr: false }
);

export const CustomCursorClient = dynamic(
  () => import("./CustomCursor"),
  { ssr: false }
);
