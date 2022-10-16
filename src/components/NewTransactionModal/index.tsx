import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

enum typeEnum {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw'
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState(typeEnum.DEPOSIT)

  function handleSetType(type: typeEnum) {
    setType(type)
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onClick={event => event.preventDefault()}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder='Titulo'
          type="text" />
        <input
          placeholder='Valor'
          type="numeric" />

        <TransactionTypeContainer>
          <RadioBox onClick={() => handleSetType(typeEnum.DEPOSIT)} isActive={type === typeEnum.DEPOSIT} type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox onClick={() => handleSetType(typeEnum.WITHDRAW)} isActive={type === typeEnum.WITHDRAW} type="button">
            <img src={outComeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='categoria'
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}