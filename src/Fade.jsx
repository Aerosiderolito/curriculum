import React, {useState} from "react";
import {useSpring, animated, config} from 'react-spring'
import RainbowText from 'react-rainbow-text';

export const Animated =()=> {
    const [flip, set] = useState(false)
    /*const props = useSpring({ */
    useSpring({
        to: { opacity: 0.2, color:"azure" },
        from: { opacity: 1 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),

    })

    return <animated.span className={"textAnime"}>
        <RainbowText lightness={0.5} saturation={1}>CV version HTML</RainbowText>
    </animated.span>
}
