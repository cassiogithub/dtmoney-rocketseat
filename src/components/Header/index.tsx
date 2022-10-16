import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderpProps {
  onOpenNewTransactionProps: () => void
}

export function Header({ onOpenNewTransactionProps }: HeaderpProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionProps}>nova transacao</button>
      </Content>
    </Container>
  )
}