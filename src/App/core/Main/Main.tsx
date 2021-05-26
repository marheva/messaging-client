import React from 'react';

function Main({ children, ...props }: MainPropsTypes): JSX.Element {
    return !!children && children
}

export default Main


