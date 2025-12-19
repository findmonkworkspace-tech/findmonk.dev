"use client"

import { ShaderAnimation } from "@/components/ui/shader-animation"

export function BackgroundAnimation() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <ShaderAnimation />
    </div>
  )
}
