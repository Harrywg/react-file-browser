import { useState, useEffect } from 'react';

export const useSyncSessionStorage = (key: string, initialValue: any) => {
    const storedValue = sessionStorage.getItem(key);
    const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);
    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};
