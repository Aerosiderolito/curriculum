import {useSpring, animated} from 'react-spring'
import {InfoCircleFill} from "react-bootstrap-icons";

export const Animated =()=> {

    const styles = useSpring({
        loop: true,
        to: [
            { opacity: 1, color: '#ffaaee' },
            { opacity: 0, color: 'rgb(14,26,19)' },
        ],
        from: { opacity: 0, color: 'red' },
    })
    return <animated.div style={styles}><InfoCircleFill/> Plus d'informations</animated.div>

    /*return <animated.span className={"textAnime"}>
        <RainbowText lightness={0.4} saturation={.8}></RainbowText>
    </animated.span>*/
}
