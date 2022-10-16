import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createServer } from "miragejs";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

createServer({
  routes() {
    this.namespace = '/api'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: Date.now()
        }
      ]
    })
  },
})

Modal.setAppElement("#root")

export function App() {
  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] = useState<boolean>(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransctionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransctionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionProps={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal isOpen={isNewTransctionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
    </>
  );
}

