export default function SmokeBackground() {
    return (
        <svg
            className="absolute inset-0 pointer-events-none -z-10 smoke-svg"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <filter id="smoke" x="0%" y="0%" width="100%" height="100%">
                    <feTurbulence baseFrequency="0.03" numOctaves="3" seed="2" />
                    <feDisplacementMap in="SourceGraphic" scale="20" />
                </filter>

                <radialGradient id="redGradient" cx="50%" cy="50%" r="75%">
                    <stop offset="0%" stopColor="rgba(255, 0, 0, 0.2)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
            </defs>

            <rect
                width="100%"
                height="100%"
                fill="url(#redGradient)"
                filter="url(#smoke)"
            />
        </svg>
    );
}