import React, {ReactNode} from 'react'

const CodeInline = ({children}: { children: ReactNode }) => {
    return (
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    )
}
export default CodeInline;