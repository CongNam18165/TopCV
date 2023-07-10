import clsx from "clsx"
import styles from "./styles.module.scss"
import { Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlays from "../../Overlays";
export default function Company(prop) {
    return (
        <div key ={prop.prop.id} className={clsx(styles.boxCompany)}>
            <div className={clsx(styles.hastag)}>
                <p>VNR500</p>
            </div>
            <div className={clsx(styles.groupData)}>
                <img className={clsx(styles.img)} src={`${prop.prop.img}`} alt="anh minh hoa1" />
                <Overlays title ={prop.prop.name_company} hover ={prop.prop.name_company}/>
                {/* <p>{prop.prop.name_company}</p> */}
                <div className={clsx(styles.amountJob)}>
                    <p>{prop.prop.amount_job} việc làm</p>
                </div>
                <div className={clsx(styles.follow)}>
                    <button><p><i class="fa-solid fa-plus"></i></p>Theo dõi</button>
                </div>
            </div>
        </div>
    )
}