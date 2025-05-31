import React, {ReactNode} from 'react'
import {bricolageGrotesque} from "@/fonts/bricolageGrotesque";

const H3 = ({children}: { children: ReactNode }) => {
    return (
        <h3 className={`scroll-m-20 text-2xl ${bricolageGrotesque.className} font-semibold tracking-tight`}>
            {children}
        </h3>
    )
}
export default H3
