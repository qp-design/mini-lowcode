import { useNavigate } from 'react-router-dom'

export const useNavigateImpl = () => {
    const toPath = useNavigate();
    const navigator = (path:string | number) => {
        if(!path) return;
        if(typeof path !== 'number' && path.startsWith('http')) {
            window.open(path, '_blank');
        } else {
            toPath(path as string)
        }
    }

    return {
        navigator
    }
}


