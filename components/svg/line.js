export const Line3 = () => {
    return (
        <svg id="HOME" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.24 57.89">
            <defs></defs>
            <path
                className="cls-1"
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.75px',
                    border: '1px solid red',
                }}
                d="M426.24,364.63H401.86a15.42,15.42,0,0,0-15.42,15.42v25.14a16.58,16.58,0,0,1-16.58,16.58H243"
                transform="translate(-243 -364.26)"
            />
        </svg>
    );
};

export const Line2 = () => {
    return (
        <svg id="HOME" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.79 236.1">
            <defs></defs>
            <path
                style={{
                    fill: 'none',
                    stroke: '#fff',
                    strokeMiterlimit: 10,
                    strokeWidth: '0.75px',
                }}
                className="cls-1"
                d="M457.72,491h-16.2a15.29,15.29,0,0,1-15.28-15.29V255.61H553.05a15.28,15.28,0,0,1,15.29,15.29v41.57a8.31,8.31,0,0,0,8.31,8.31h0"
                transform="translate(-425.86 -255.23)"
            />
        </svg>
    );
};

export const Line1 = () => {
    return (
        <svg
            id="HOME"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 74.81 124.73"
            style={{ width: '6rem' }}
        >
            <g>
                <path
                    filter="url(#boxShadow)"
                    style={{
                        fill: 'none',
                        stroke: '#fff',
                        strokeMiterlimit: 10,
                        strokeWidth: '0.75px',
                    }}
                    fill="url(#boxShadow)"
                    className="cls-1"
                    d="M453.72,131.63h-10.9a16.58,16.58,0,0,0-16.58,16.58v107.4H378.91"
                    transform="translate(-378.91 -131.26) scale(2)"
                />
            </g>
        </svg>
    );
};

// Blue

export const Line3Blue = () => {
    return (
        <svg id="HOME" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183.24 57.89">
            <g>
                <path
                    fill="url(#boxShadow)"
                    className="cls-1 path3"
                    style={{
                        fill: 'none',
                        stroke: '#0885e6',
                        strokeMiterlimit: 10,
                        strokeWidth: '1px',
                    }}
                    d="M426.24,364.63H401.86a15.42,15.42,0,0,0-15.42,15.42v25.14a16.58,16.58,0,0,1-16.58,16.58H243"
                    transform="translate(-243 -364.26)"
                />
                <path
                    filter="url(#dropShadow)"
                    className="cls-1 path3"
                    d="M426.24,364.63H401.86a15.42,15.42,0,0,0-15.42,15.42v25.14a16.58,16.58,0,0,1-16.58,16.58H243"
                    transform="translate(-243 -364.26) scale(2)"
                />
            </g>
        </svg>
    );
};

export const Line2Blue = () => {
    return (
        <svg id="HOME" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.79 236.1">
            <defs></defs>
            <path
                style={{
                    fill: 'none',
                    stroke: '#0885e6',
                    strokeMiterlimit: 10,
                    strokeWidth: '1px',
                }}
                className="cls-1 path2"
                d="M457.72,491h-16.2a15.29,15.29,0,0,1-15.28-15.29V255.61H553.05a15.28,15.28,0,0,1,15.29,15.29v41.57a8.31,8.31,0,0,0,8.31,8.31h0"
                transform="translate(-425.86 -255.23)"
            />
        </svg>
    );
};

export const Line1Blue = () => {
    return (
        <svg
            id="HOME"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 74.81 124.73"
            style={{ width: '6rem' }}
        >
            <filter id="blur-filter" x="-2" y="-2" width="200" height="200">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
            <path
                style={{
                    fill: 'none',
                    stroke: '#0885e6',
                    strokeMiterlimit: 10,
                    strokeWidth: '1px',
                    zIndex: 10,
                }}
                id="lineSVG"
                className="cls-1 path1"
                d="M453.72,131.63h-10.9a16.58,16.58,0,0,0-16.58,16.58v107.4H378.91"
                transform="translate(-378.5 -131.8)"
            />
        </svg>
    );
};
