import { useNavigate } from 'react-router-dom'
import { getEnv, navigatorHandler } from '@brushes/utils';
export const useNavigateImpl = () => {
    const toPath = useNavigate();
    const isTaro = getEnv();
    const navigator = (path:string | number) => {
        if(!path) return;
        if(isTaro) {
            navigatorHandler('goodPoints');
            return;
        }
        if(typeof path !== 'number' && path.startsWith('http')) {
            window.open(path, '_blank');
        } else {
            toPath(path)
        }
    }

    return {
        navigator
    }
}


