import { useEffect } from 'react'

// Lightweight deterrent against casual copying of site content - blocks the
// context menu, text selection/drag, copy-cut shortcuts and devtools hotkeys.
// Note: this raises friction for casual visitors but cannot stop a determined
// user from viewing page source - no client-side measure can.
export default function ContentGuard() {
  useEffect(() => {
    const blockEvent = (e) => e.preventDefault()
    const blockKeys = (e) => {
      const key = e.key?.toLowerCase()
      const blockedCombo =
        (e.ctrlKey || e.metaKey) && ['c', 'x', 'u', 's', 'p'].includes(key)
      const blockedDevtools =
        key === 'f12' ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(key))
      if (blockedCombo || blockedDevtools) e.preventDefault()
    }

    document.addEventListener('contextmenu', blockEvent)
    document.addEventListener('selectstart', blockEvent)
    document.addEventListener('dragstart', blockEvent)
    document.addEventListener('copy', blockEvent)
    document.addEventListener('cut', blockEvent)
    document.addEventListener('keydown', blockKeys)

    return () => {
      document.removeEventListener('contextmenu', blockEvent)
      document.removeEventListener('selectstart', blockEvent)
      document.removeEventListener('dragstart', blockEvent)
      document.removeEventListener('copy', blockEvent)
      document.removeEventListener('cut', blockEvent)
      document.removeEventListener('keydown', blockKeys)
    }
  }, [])

  return null
}
