'use client';

import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

export default function ClarityScript(): null {
    useEffect(() => {
        clarity.init('x2vohc5j5y');
    }, []);

    return null;
}