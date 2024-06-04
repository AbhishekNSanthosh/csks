import React from 'react'
import styles from './CardView.module.css'
import { Card } from './Components/Card/Card'
import { faEarthAmericas,faAward,faCalendarCheck, faChalkboardTeacher, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';

export const CardView = () => {

  const CardItems = [
    {
        icon:faEarthAmericas,
        title:"Student Branches",
        desc:"There are thousands of IEEE Student Branches throughout the world and likely one near you. It’s your connection to local professionals, academics and the IEEE organization at a large scale."
    },
    {
        icon:faAward,
        title:"Funds & Awards",
        desc:"Being an IEEE Student member has its perks. You’ll have access to funds including travel grants, scholarships, awards and much more! All to support your advancement and efforts to the next level."
    },
    {
        icon:faCalendarDays,
        title:"Events",
        desc:"IEEE hosts events all year and all around the globe on topics that will surely interest you. In addition, IEEE Students hosts competitions that offer the opportunity to develop professionally."
    },
    {
        icon:faChalkboardTeacher,
        title:"Mentoring Support",
        desc:"IEEE members share their expertise with IEEE Students in the interest of the students upward mobility within their chose field. Educational tools are also available to IEEE Student members."
    },
]

  return (
    <div className={styles.container}>
        {
            CardItems?.map((item,index)=>(
                <Card icon={item?.icon} title={item?.title}/>
            ))
        }
    </div>
  )
}
