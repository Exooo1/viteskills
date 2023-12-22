import React, {ReactElement, ReactNode} from "react";

interface IReactChilds {
    children: ReactElement
    customStyles: React.CSSProperties
}

const TestReactChild: React.FC<IReactChilds> = ({children, customStyles, someHtml}) => {
    const t = <h2 style={{color: 'yellowgreen'}}>Omg! this is h2!</h2>
    return <div style={customStyles}>
        {t}
        {someHtml}
        {children}
    </div>
}

export const ReactChilds = () => {
    const customStyles: React.CSSProperties = {
        background: 'yellow',
    }
    return <div>
        <h1>Hello this is ReactChilds!</h1>
        <TestReactChild customStyles={customStyles} someHtml={<h1 style={{color: 'black'}}>This is my story</h1>}>
            <h2>Hello</h2>
        </TestReactChild>
    </div>
}