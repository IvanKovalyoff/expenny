'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Loader() {
    const gradDotRef = useRef(null)
    const fillDotRef = useRef(null)
    const mainGradRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
            defaults: { ease: 'sine.inOut', duration: 1.2 }
        })

        tl.fromTo(gradDotRef.current, { x: 90 }, { x: -90 })
          .fromTo(fillDotRef.current, { x: -90 }, { x: 90 }, 0)
          .fromTo(mainGradRef.current, { attr: { cx: 230, fx: 230 } }, { attr: { cx: 570, fx: 570 } }, 0)

        return () => tl.kill()
    }, [])

    return (
        <div className="loader">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
                <defs>
                    <radialGradient ref={mainGradRef} id="loaderGrad" cx="400" cy="300" fx="400" fy="300" r="100" gradientUnits="userSpaceOnUse">
                        <stop offset=".68" stopColor="#6334fb" />
                        <stop offset=".72" stopColor="#6639fb" />
                        <stop offset=".77" stopColor="#7248fb" />
                        <stop offset=".82" stopColor="#8561fb" />
                        <stop offset=".88" stopColor="#9f83fb" />
                        <stop offset=".93" stopColor="#c2b0fb" />
                        <stop offset=".99" stopColor="#ebe6fb" />
                        <stop offset="1"   stopColor="#f1eefb" />
                    </radialGradient>
                </defs>
                <circle ref={fillDotRef} cx="400" cy="300" fill="#6334fb" r="100" />
                <circle ref={gradDotRef} cx="400" cy="300" fill="url(#loaderGrad)" r="100" />
            </svg>
        </div>
    )
}
