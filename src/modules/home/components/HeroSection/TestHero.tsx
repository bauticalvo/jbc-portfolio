import React, { useEffect } from 'react';

export const TestHero: React.FC = () => {
    useEffect(() => {
        // 1. Solo creamos el script SI no existe ya (para evitar duplicados al navegar)
        const existingScript = document.querySelector(`script[src="/webgl-fluid.js"]`);
        
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = '/webgl-fluid.js';
            script.async = true;
            document.body.appendChild(script);
        }

        return () => {
            // No borramos el script aquí para evitar parpadeos si el componente se remonta
        };
    }, []);

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            {/* 2. El canvas con el ID exacto que busca el script */}
            <canvas 
                id="canvas" 
                className="block w-full h-full"
                style={{ 
                    filter: 'grayscale(100%) brightness(0.7)',
                }}
            />

            {/* 3. Tu heading con tus estilos exactos pero en Tailwind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none w-full px-4">
                <h1 className="text-white text-center font-bold text-[50px] md:text-[75px] lg:text-[100px] leading-tight font-sans">
                    Juan Bautista Calvo
                </h1>
            </div>
        </div>
    );
};