import clsx from "clsx"
import styles from "./styles.module.scss"
import {useState} from "react"
export default function InfoTele({phone,name}){
    const [ isHover,setIsHover] = useState(false)
    function handleMouseEnter(){
        setIsHover(true)
    }
    function handleMouseLeave(){
        setIsHover(false)
    }
    return(
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={clsx(styles.container)}>
            <span className={clsx(isHover? styles.icon : "")}>
                <i class="fa-solid fa-phone"></i>
            </span>
            <p>{phone}</p>
            <div></div>
            <p style ={{color: isHover? "#00b14f" : "#212f3f"}}>{name}</p>
        </div>
    )
}