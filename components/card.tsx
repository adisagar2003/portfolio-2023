import React from 'react';
import styles from './card.module.css';
import {AiFillEye, AiFillGithub, AiFillStar, AiOutlineStar} from 'react-icons/ai';
export type cardProps = {projectName:string, projectStars:string, projectDescription:string, gitHubLink:string, liveLink:string}

function card({projectName,projectStars,projectDescription,gitHubLink,liveLink}: cardProps) {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.projectContent}>
            <b className={styles.projectName}>{projectName}</b>
            <p className={styles.projectDescription}>{projectDescription}</p>
        </div>
        <div className={styles.starsContainer}>
            <div>
                <AiFillStar  />
            </div>
            <div>
                {projectStars}
            </div>
        </div>

        <div className={styles.linksContainer}>

                {liveLink!='' && <a href={liveLink} target="_blank"><AiFillEye  /></a>}    
                <a href={gitHubLink} target='_blank'><AiFillGithub  /></a>
        </div>
    </div>
  )
}

export default card