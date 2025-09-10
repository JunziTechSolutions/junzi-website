import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Утилитарная функция для создания условных анимаций
export function useConditionalAnimation() {
  const isMobile = useIsMobile()
  
  return {
    isMobile,
    // Возвращает пустые варианты анимации на мобильных устройствах
    getConditionalVariants: (variants: any) => {
      if (isMobile) {
        return {
          hidden: { opacity: 1, y: 0 },
          visible: { opacity: 1, y: 0 }
        }
      }
      return variants
    },
    // Возвращает условный animate prop
    getConditionalAnimate: (animateValue: any) => {
      if (isMobile) {
        // На мобильных устройствах возвращаем статичное состояние
        if (typeof animateValue === 'object' && animateValue.opacity !== undefined) {
          return { opacity: 1, y: 0 }
        }
        // Для whileHover и других пропсов возвращаем undefined
        return undefined
      }
      return animateValue
    }
  }
}
