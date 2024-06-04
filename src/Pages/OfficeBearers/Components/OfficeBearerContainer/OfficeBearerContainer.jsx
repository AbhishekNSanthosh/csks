import React from 'react'
import styles from './OfficeBearerContainer.module.css'
import { Execom24 } from '../../../../Utils/Constants'
import { PersonDetailsCard } from '../PersonDetailsCard/PersonDetailsCard'

export const OfficeBearerContainer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <span className={styles.title}>Office Bearers 2024</span>
            </div>
            <div className={styles.row}>
                {Execom24?.map((execom,index)=>(
                    <PersonDetailsCard execom={execom}/>
                ))}
            </div>
        </div>
    </div>
  )
}
