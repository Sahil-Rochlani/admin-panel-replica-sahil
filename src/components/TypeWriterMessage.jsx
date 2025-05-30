import { useEffect, useState } from "react"

const TypeWritterMessage = ({fullText, delay = 10}) => {
    // State to hold the part of the text currently displayed
    const [displayedText, setDisplayedText] = useState('')

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(fullText.slice(0, index + 1))
            index++;
            if(index >= fullText.length){
                clearInterval(interval)
            }
        },delay)

        return () => clearInterval(interval)
    }, [fullText])

    return <>{displayedText}</>
}

export default TypeWritterMessage