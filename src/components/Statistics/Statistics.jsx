import propTypes from 'prop-types';
import getRandomHexColor from "components/utils/getRandomColor";
import css from './Statistics.module.css'

export default function Statistics({ title, stats }) {
  const statList = stats.map(({ id, label, percentage }) => (
    <li className={css.item} key={id} style={{backgroundColor:getRandomHexColor()}}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
  ))
  return (
    <section>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {statList}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
    }))
}