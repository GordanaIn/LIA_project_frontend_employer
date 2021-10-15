import {useEffect, useState} from 'react'
import {WindowSize} from "../../../interfaces/HandleInterface"; //importerar Intercface


function useWindowSize(): WindowSize {
    //setter en default/utgångvärde för window size
    const [windowSize, setWindowSize] = useState<WindowSize>( {
        width: 0,
        height: 0,
    })
    useEffect(() => {
        //function som sätter värde på windowSize
        const handler = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        //functionen repeteras för att uppdatera/refresh windowSize värden
        handler()
        window.addEventListener('resize', handler)
        return () => {
            window.removeEventListener('resize', handler)
        }
    }, [])
    return windowSize
}
export default useWindowSize;
