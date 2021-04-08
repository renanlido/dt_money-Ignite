import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary(){
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction)=> {
    switch (transaction.type) {
      case 'deposit':
        acc.deposits += transaction.value;
        acc.total += transaction.value;
        break;

      case 'withdraw':
        acc.withdraws += transaction.value;
        acc.total -= transaction.value
        break; 

      default:
        break;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0, 
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas"/>
        </header>
        <strong>
          {
            new Intl.NumberFormat
            ('pt-BR', 
              {
                style: 'currency',
                currency: 'BRL',
              }
            ).format(Number(summary.deposits))
          }
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={ outcomeImg } alt="Saídas"/>
        </header>
        <strong>-
          {
            new Intl.NumberFormat
            ('pt-BR', 
              {
                style: 'currency',
                currency: 'BRL',
              }
            ).format(Number(summary.withdraws))
          }
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="Total"/>
        </header>
        <strong>
          {
            new Intl.NumberFormat
            ('pt-BR', 
              {
                style: 'currency',
                currency: 'BRL',
              }
            ).format(Number(summary.total))
          }
        </strong>
      </div>
    </Container>
  );
}