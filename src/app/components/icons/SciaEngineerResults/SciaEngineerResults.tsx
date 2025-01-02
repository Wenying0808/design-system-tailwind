interface IconProps{
    size?: number,
    className?: string;
}
export const SciaEngineerResultsIcon: React.FC<IconProps> = ({ size = 24, className = ""}) => {
    return(
        <svg 
            width={size} 
            height={size}  
            viewBox={`0 0 ${size} ${size}`}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className={className}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M7.04059 2C8.17255 4.73556 2.62747 7.22077 1.3348 7.75708H1L1.07489 7.86192L1.07027 7.8637C1.07027 7.8637 1.07988 7.87478 1.09902 7.8957L1.72249 8.76856C3.06893 10.6536 5.07599 15.6161 2.43102 20.345L1.89858 21.2969H15.3926L15.5802 20.9943C15.6087 20.9483 15.6375 20.9004 15.6664 20.8508L20.8903 15.5398H21.2563L21.4439 15.2372C21.5507 15.065 21.6605 14.8671 21.7701 14.6453L21.8123 14.6024L21.798 14.5883C22.9085 12.2993 23.9633 7.57624 21.4776 2.3643L21.3265 2.0474C21.3266 2.03163 21.3267 2.01583 21.3267 2H7.04059ZM9.48902 11.4005C9.3508 11.3968 9.20989 11.3907 9.06623 11.3819C6.88114 11.2481 5.12506 10.6107 3.82139 9.91443C4.76165 12.0203 5.48577 15.0989 4.62208 18.3319L8.28154 14.6114L8.29472 14.5879C8.89019 13.5232 9.27113 12.4484 9.48902 11.4005ZM9.1629 15.5398L4.75857 20.0175H14.6664C15.1595 19.0934 15.7054 17.5143 15.8302 15.5398H9.1629ZM15.8492 14.2605H9.89297C10.3363 13.2846 10.6292 12.309 10.8028 11.3558C12.8203 11.157 14.1201 10.3833 14.9004 9.69186C15.5315 11.3133 15.8028 12.8608 15.8492 14.2605ZM17.1297 14.2605C17.0777 12.532 16.7132 10.6081 15.8338 8.60201C15.8717 8.53887 15.8894 8.50338 15.8894 8.50338C15.8894 8.50338 19.5271 7.07684 20.8517 4.16542C22.4077 8.37141 21.5646 12.0517 20.7094 13.8993L20.3542 14.2605H17.1297ZM17.112 15.5398C17.0626 16.3934 16.9409 17.1849 16.7763 17.8979L19.0958 15.5398H17.112Z" fill="currentColor"/>
        </svg>
    )
}