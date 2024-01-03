import React, {ReactElement} from "react";

export const PolymorphicComponent = () => {
    return <div>
        <h1>This is PolymorphicComponent!</h1>
        <AnyComponent AS={'button'}>Button</AnyComponent>
    </div>
}

type PolymorphicComponent = {
    AS: 'h1' | 'div' | 'b' | 'p' | 'button',
    name?: string
    description?: string
    children: ReactElement
}

const AnyComponent: React.FC<PolymorphicComponent> = ({ AS, name, children}) => {
    return <AS>
        {children}
    </AS>
}