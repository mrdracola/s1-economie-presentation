import { useState, useCallback, useEffect } from 'react'

interface UseFullscreenReturn {
  isFullscreen: boolean
  toggleFullscreen: () => void
  requestFullscreen: () => Promise<void>
  exitFullscreen: () => void
}

export function useFullscreen(): UseFullscreenReturn {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
    document.addEventListener('mozfullscreenchange', handleFullscreenChange)
    document.addEventListener('msfullscreenchange', handleFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
      document.removeEventListener('msfullscreenchange', handleFullscreenChange)
    }
  }, [])

  const requestFullscreen = useCallback(async () => {
    try {
      const el = document.documentElement
      if (el.requestFullscreen) {
        await el.requestFullscreen()
      } else if ((el as unknown as { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen) {
        await (el as unknown as { webkitRequestFullscreen: () => Promise<void> }).webkitRequestFullscreen()
      }
    } catch (error) {
      // Fullscreen API not supported or blocked — silently ignore
      console.warn('Fullscreen request failed:', error)
    }
  }, [])

  const exitFullscreen = useCallback(() => {
    try {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if ((document as unknown as { webkitExitFullscreen: () => void }).webkitExitFullscreen) {
        ;(document as unknown as { webkitExitFullscreen: () => void }).webkitExitFullscreen()
      }
    } catch (error) {
      console.warn('Exit fullscreen failed:', error)
    }
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      requestFullscreen()
    }
  }, [isFullscreen, requestFullscreen, exitFullscreen])

  return { isFullscreen, toggleFullscreen, requestFullscreen, exitFullscreen }
}
