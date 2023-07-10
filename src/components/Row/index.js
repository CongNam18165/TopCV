import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"


export default function Rows({ icon, text, hot, neww }) {
    const [isShow, setIsShow] = useState(false);
    const [isHot, setIsHot] = useState(hot);
    const [isNew, setIsNew] = useState(neww);
    const [isHover, setIsHover] = useState(false)
    function handleMouseEnter() {
        setIsShow(true)
        setIsHover(true)
    }
    function handleMouseLeave() {
        setIsShow(false)
        setIsHover(false)
    }
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={clsx(styles.title)}>
            <div>
                <span>{icon}</span>
                <p style = {{color: isHover?"#00b14f" : ""}}>{text}</p>
                <span>{isHot ? <p className={clsx(styles.hot)}>HOT</p> : ""}{isNew ? <p className={clsx(styles.new)}>MỚI</p> : ""}</span>
            </div>
            <i style={{ display: isShow ? "block" : "none" }} class="fa-solid fa-arrow-right"></i>
        </div>
    )
}