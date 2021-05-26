import React, { useEffect, useState } from 'react'
//USAGE
// const isMobile = useResponsiveState('lg')
//
// Based on ant.d code
// should be CONST
//
const dimensionMaxMap = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
}

type Sizes = keyof typeof dimensionMaxMap

function useMediaQueryEffect(mediaQueryString: string): boolean {
    const mediaQuery = matchMedia(mediaQueryString)

    const [mediaQueryState, setMediaQueryState] = useState<boolean>(
        mediaQuery ? mediaQuery.matches : false,
    )

    useEffect(() => {
        const onMediaQueryUpdate = (changedMediaQuery: MediaQueryListEvent): void =>
            setMediaQueryState(changedMediaQuery ? changedMediaQuery.matches : false)
        mediaQuery.addListener(onMediaQueryUpdate)
        return () => mediaQuery.removeListener(onMediaQueryUpdate)
    }, [])

    return mediaQueryState
}

export default function useResponsiveState(size: Sizes): boolean {
    return useMediaQueryEffect(`(max-width: ${dimensionMaxMap[size]})`)
}
