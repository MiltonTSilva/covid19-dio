import styled from 'styled-components'
import { CardContent, Typography } from 'components'

export const LabelStyled = styled(Typography)`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
`

export const ValueStyled = styled(Typography)`
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
`

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 25px;

`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
`