import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface ITransaction {
  id: string
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface ICreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface ITransactionsContext {
  transactions: ITransaction[]
  fetchTransactions: (query: string) => Promise<void>
  createTransaction: (data: ICreateTransactionInput) => Promise<void>
}

interface ITransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ITransactionsContext)

export function TransactionContextProvider({
  children,
}: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: '',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: ICreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
