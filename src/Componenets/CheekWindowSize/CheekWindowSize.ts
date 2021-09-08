import { useEffect, useState } from 'react'
import {WindowSize} from "../Interface/HandleInterface";

function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    })

    useEffect(() => {
        const handler = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }


        handler()

        window.addEventListener('resize', handler)


        return () => {
            window.removeEventListener('resize', handler)
        }

    }, [])

    return windowSize
}

export default useWindowSize
