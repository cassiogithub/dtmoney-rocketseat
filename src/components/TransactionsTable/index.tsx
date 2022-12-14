import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data))
  }, [])

  console.log(transactions)
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20-02-2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento website</td>
            <td className="withdraw">R$ -1.000</td>
            <td>Desenvolvimento</td>
            <td>20-02-2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
