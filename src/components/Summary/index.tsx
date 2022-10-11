import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outocomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outocomeImg} alt="Saídas" />
        </header>
        <strong>-R$1000</strong>
      </div>
      <div className="hightlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$0</strong>
      </div>
    </Container>
  )
}