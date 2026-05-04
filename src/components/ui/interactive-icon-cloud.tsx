"use client"

import { useEffect, useMemo, useState } from "react"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, isDark: boolean) => {
  const bgHex = isDark ? "#080510" : "#f3f2ef"
  const fallbackHex = isDark ? "#ffffff" : "#6e6e73"
  const minContrastRatio = isDark ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.MouseEvent) => e.preventDefault(),
    },
  })
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDarkMode()
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, isDark)
    )
  }, [data, isDark])

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
}

// Marketing & Analytics tech stack slugs for ZENSICK
export const marketingTechSlugs = [
  "googleads",
  "googleanalytics",
  "meta",
  "facebook",
  "instagram",
  "tiktok",
  "linkedin",
  "twitter",
  "shopify",
  "stripe",
  "hubspot",
  "mailchimp",
  "figma",
  "canva",
  "adobecreativecloud",
  "notion",
  "slack",
  "zapier",
  "tableau",
  "googlecloud",
  "amazonaws",
  "vercel",
  "react",
  "typescript",
  "nextdotjs",
  "tailwindcss",
]

export default IconCloud
