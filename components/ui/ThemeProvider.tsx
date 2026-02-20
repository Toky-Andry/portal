// 'use client'

// // components/ui/ThemeProvider.tsx
// import { useEffect } from 'react'
// import { useThemeStore } from '@/store/useThemeStore'

// export default function ThemeProvider({ children }: { children: React.ReactNode }) {
//   const { theme } = useThemeStore()

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme)
//   }, [theme])

//   return <>{children}</>
// }