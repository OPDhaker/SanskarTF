import { Html, useProgress } from '@react-three/drei';

import { styles } from '../styles';


const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html>
            <span className="canvas-load"></span>
            <p
                style={{
                    fontSize: 16,
                    color: '#1fad9a',
                    fontWeight: 800,
                    marginTop: 40
                }}
            >{progress.toFixed(2)}%</p>
        </Html>
    )
}

export default Loader