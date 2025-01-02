interface IconProps{
    size?: number;
    className?: string;
}
export const SomnoxEcoSystemMobileAppIcon: React.FC<IconProps> = ({ size = 100, className = ""}) => {
    return(
        <svg 
            width={size} 
            height={size}  
            viewBox={`0 0 ${size} ${size}`}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
        >
            <g clipPath="url(#clip0_1508_11612)">
                <circle cx={size/2} cy={size/2} r={size/2} fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M52.5 75.625C52.5 77.0057 51.3807 78.125 50 78.125C48.6193 78.125 47.5 77.0057 47.5 75.625C47.5 74.2443 48.6193 73.125 50 73.125C51.3807 73.125 52.5 74.2443 52.5 75.625ZM51.5 75.625C51.5 76.4534 50.8284 77.125 50 77.125C49.1716 77.125 48.5 76.4534 48.5 75.625C48.5 74.7966 49.1716 74.125 50 74.125C50.8284 74.125 51.5 74.7966 51.5 75.625Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M37.5 18.75C34.7386 18.75 32.5 20.9886 32.5 23.75V76.25C32.5 79.0114 34.7386 81.25 37.5 81.25H62.5C65.2614 81.25 67.5 79.0114 67.5 76.25V23.75C67.5 20.9886 65.2614 18.75 62.5 18.75H37.5ZM62.5 20.25H37.5C35.567 20.25 34 21.817 34 23.75V26H66V23.75C66 21.817 64.433 20.25 62.5 20.25ZM34 76.25V72H66V76.25C66 78.183 64.433 79.75 62.5 79.75H37.5C35.567 79.75 34 78.183 34 76.25ZM52.4605 42.1128C52.4605 42.8358 52.3423 43.5311 52.1241 44.1805C52.0516 44.5113 51.9744 44.8125 51.9026 45.0927C51.6108 46.2318 51.4083 47.0221 51.9744 48.0329C52.8465 49.5902 53.8143 49.8078 54.694 49.8985L54.7317 49.8984C58.7627 49.8984 62.0305 53.1662 62.0305 57.1972C62.0305 61.2282 58.7627 64.496 54.7317 64.496C54.6342 64.496 54.5372 64.4941 54.4407 64.4903C49.6485 65.0293 43.11 63.3968 39.404 55.0883C35.135 45.5176 38.9723 39.2985 41.8827 37.0763C42.9987 36.1689 44.4222 35.625 45.9727 35.625C49.5558 35.625 52.4605 38.5297 52.4605 42.1128Z" fill="white"/>
            </g>
        </svg>
    )
}