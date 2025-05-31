import React, {ReactNode} from 'react'
import {karla} from "@/fonts/karla";

const BlockQuote = ({children}: { children: ReactNode }) => {
    return (
        <blockquote className={`mt-6 ${karla.className} border-l-2 pl-6 italic`}>
            {children}
        </blockquote>)
}
export default BlockQuote
