import React, {ReactElement, ReactNode} from "react";

interface IReactChilds {
    children: ReactElement
    customStyles: React.CSSProperties
}

const TestReactChild: React.FC<IReactChilds> = ({children, customStyles}) => {
    return <div style={customStyles}>
        {children}
    </div>
}

export const ReactChilds = () => {
    const customStyles: React.CSSProperties = {
        background: 'yellow',
    }
    return <div>
        <h1>Hello this is ReactChilds!</h1>
        <TestReactChild customStyles={customStyles}>
            <h2>Hello</h2>
        </TestReactChild>
    </div>
}