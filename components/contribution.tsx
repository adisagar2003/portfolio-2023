import React from 'react'
import styles from './card.module.css';
import { AiFillEye, AiFillGithub, AiFillStar, AiOutlineArrowsAlt } from 'react-icons/ai';
export type projectCardProps = {projectName:string, projectDescription:string, gitHubLink:string, liveLink:string}

function contribution({projectName, projectDescription, gitHubLink, liveLink}: projectCardProps) {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.projectContent}>
            <b className={styles.projectName}>{projectName}</b>
            <p className={styles.projectDescription}>{projectDescription}</p>
        </div>
        <div className={styles.starsContainer}>
            <div>
                <AiFillGithub  />
            </div>
            <div>
            </div>
        </div>

        <div className={styles.linksContainer}>

                {liveLink!='' && <a href={liveLink} target="_blank"><AiOutlineArrowsAlt   /></a>}    

        </div>
    </div>
  )
}

export default contribution