import styled from 'styled-components'
import colors from '@styles/scss/base/_colors.scss'

export const DivSnackbar = styled.div`
  background-color: ${props => props.isError ? colors.colorRed : colors.colorPurple};
`