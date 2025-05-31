import React, {ReactNode} from 'react'
import {bricolageGrotesque} from "@/fonts/bricolageGrotesque";

const H4 = ({children}: {children: ReactNode}) => {
    return (
        <h4 className={`scroll-m-20 text-xl ${bricolageGrotesque.className} font-semibold tracking-tight`}>
            {children}
        </h4>
    )
}
export default H4
