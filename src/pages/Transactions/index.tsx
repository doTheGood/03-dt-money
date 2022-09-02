import styled from "styled-components";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionTable
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income"> R$ 12.000,00 </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/03/22</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome"> - R$ 100,00 </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/03/22</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income"> R$ 12.000,00 </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/03/22</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>
  );
}
