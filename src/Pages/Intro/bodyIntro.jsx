import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function bodyIntro() {
    const itemsRef = useRef(null);
    const triggerRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            itemsRef.current,
            { x: 0 },
            {
                x: '-300vw',
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '+=2000',
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, []);
    return (
        <div>
            <div className="scroll-homepage">
                <div className="" ref={triggerRef}>
                    <div className="scroll-items" ref={itemsRef}>
                        zzzzzzzzzzzzzzzz
                    </div>
                </div>
            </div>
        </div>
    )
}

export default bodyIntro