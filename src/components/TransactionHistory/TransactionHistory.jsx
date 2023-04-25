import propTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  const itemList = items.map(({ id, type, amount, currency }) => (
    <tr key={id} >
      <td className={css.capitalized}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>{itemList}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        amount: propTypes.string.isRequired,
        currency: propTypes.string.isRequired,
    }))
}