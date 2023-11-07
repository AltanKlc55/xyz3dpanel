import styles from './menuItem.module.scss'

import React from 'react'
const remixiconUrl = '/remixicon/fonts/remixicon.symbol.svg'

export default ({
  icon, title, action, isActive = null,
}) => (
  <button
    className={`${styles.menu__item}${isActive && isActive() ? " "+styles.is__active : ''}`}
    onClick={action}
    title={title}
  >
    <svg className="remix">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>
  </button>
)