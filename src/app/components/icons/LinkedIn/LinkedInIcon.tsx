interface IconProps{
    size?: number;
    className?: string;
}
export const LinkedInIcon: React.FC<IconProps> = ({ size = 24, className = ""}) => {
    return(
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path 
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.75 4.875C6.75 5.925 5.925 6.75 4.875 6.75C3.825 6.75 3 5.925 3 4.875C3 3.825 3.825 3 4.875 3C5.925 3 6.75 3.825 6.75 4.875ZM6.75 8.25H3V20.25H6.75V8.25ZM12.75 8.25H9V20.25H12.75V13.95C12.75 10.425 17.25 10.125 17.25 13.95V20.25H21V12.675C21 6.75 14.325 6.975 12.75 9.9V8.25Z"
                fill="currentColor"
            />
        </svg>
    )
}