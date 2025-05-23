import { useNavigate } from 'react-router-dom'

export const useNavigateImpl = () => {
    const toPath = useNavigate();
    const navigator = (path:string) => {
        console.log(7, path);
        toPath(path)
    }

    return {
        navigator
    }
}


