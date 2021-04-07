import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

//O estado está sendo repassado pelo componente pai que é o app.tsx
//onde está o modal
interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

//O componente está recebendo esta função por parâmetro
export function Header({ onOpenNewTransactionModal }: HeaderProps){
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

       
      </Content>
    </Container>
  );
}