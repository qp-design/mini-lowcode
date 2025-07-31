import { useNavigate } from 'react-router-dom'

export const useNavigateImpl = () => {
    const toPath = useNavigate();
    const navigator = (path:string) => {
        if(!path) return;
        if(path.startsWith('http')) {
            window.open(path, '_blank');
        } else {
            toPath(path)
        }
    }

    return {
        navigator
    }
}


