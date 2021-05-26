import React from 'react'
import styled from 'styled-components'
import SpinnerBase from './SpinnerBase'

const SpinnerStyled = styled(SpinnerBase).attrs(({ fullScreen }: any) => ({
    fullScreen,
}))
    ``

SpinnerStyled.displayName = 'CustomComponentStyledSpin';
export default SpinnerStyled
