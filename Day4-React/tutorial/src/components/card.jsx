import React from 'react'
import styles from './card.module.css';

const Card = ({ props }) => {
  const tagColors = [`${styles.blue}`, `${styles.yellow}`, `${styles.green}`];

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={props.image} alt='Computer Language' />
      <h1 className={styles.card__title}>{props.title}</h1>
      <div className={styles.card__tags}>
      {props.tags.map((tag, index) => {
        return <span className={`${styles.tag} ${tagColors[index]}`}>{tag}</span>
      })}
      </div>
      <p className={styles.card__description}>{props.description}</p>
    </div>
  )
}

export default Card