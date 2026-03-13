'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Standard Next.js dynamic import (without .then chains to ensure bundler static analysis works)
const Spline = dynamic(() => import('@splinetool/react-spline'), {
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
