import { useEffect, useState } from "react";

function useLoginData() {
    const userName = sessionStorage.getItem('email')
    const regex = /([^@]+)@/;
    const match = userName?.match(regex);
    const [loginData, setLoginData] = useState(match ? match[1] : null)

    useEffect(()=> {
        function handleLogout() {
            setLoginData(null)
        }

        window.addEventListener('logout', handleLogout);
        return () => {
            window.removeEventListener('logout', handleLogout);
        };
    }, [])

    return loginData;
}

export default useLoginData