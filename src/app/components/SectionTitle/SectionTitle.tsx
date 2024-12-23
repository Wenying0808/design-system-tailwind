interface Props{
    title: string
}

export function SectionTitle({title}: Props){
    return(
        <h1 className="text-primary text-xl md:text-2xl font-semibold italic underline underline-offset-8">{title}</h1>
    )
}