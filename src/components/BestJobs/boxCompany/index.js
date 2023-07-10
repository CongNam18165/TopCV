import clsx from "clsx"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react"
import Overlays from "../../Overlays"
function BoxCompany(prop) {
    const [isLike, setIsLike] = useState(false)

    function handleLike() {
        setIsLike(!isLike)
    }
    return (
        <div key={prop.prop.id} className={clsx(styles.container)}>
            <div className={clsx(styles.groupTitle)}>
                <img className={clsx(styles.image)} src={prop.prop.image} alt="anh minh hoa" />
                <div>
                    {/* <p>{prop.prop.name_company}</p>
                    <p>{prop.prop.name_position}</p> */}
                    <Overlays title={prop.prop.name_company} hover= {prop.prop.name_company}/>
                    <Overlays title={prop.prop.name_position} hover ={prop.prop.name_position}/>
                </div>
            </div>
            <div className={clsx(styles.groupInfo)}>
                <div className={clsx(styles.boxSalary)}>
                    <p>{prop.prop.salary} triệu</p>
                    <p>{prop.prop.location}</p>
                </div>
                <i style={{ color:isLike? 'red':"#e9eaec" }} onClick={handleLike} class="fa-solid fa-heart"></i>
            </div>
        </div>
    )
}
export default BoxCompany