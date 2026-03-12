'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Standard import path, transpilePackages in next.config.mjs handles the CJS/ESM interop
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default || mod), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
})

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Spline
        {...({
          scene: scene,
          className: className,
        } as any)}
      />
    </Suspense>
  )
}
