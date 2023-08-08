import {
  TransactionTable,
  TransactionTr,
  TransitionTd,
  HeaderTr,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transData }) => {
  return (
    <TransactionTable>
      <thead>
        <HeaderTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </HeaderTr>
      </thead>

      <tbody>
        {transData.map(({ id, type, amount, currency }, index) => {
          return (
            <TransactionTr key={id} $even={index % 2 === 0}>
              <TransitionTd>{type}</TransitionTd>
              <TransitionTd>{amount}</TransitionTd>
              <TransitionTd>{currency}</TransitionTd>
            </TransactionTr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};
