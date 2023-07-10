import clsx from "clsx"
import styles from "./styles.module.scss"
import CardInfoCompany from "./cardInfoCompany/carInfoCompany"
import { Container, Row, Col } from "react-bootstrap"
import {useState, useEffect} from "react"
export default function Body() {
    const [DatasCompany, setDatasCompany] = useState([])
    useEffect(()=>{
fetch("https://64ab86cd0c6d844abedf7876.mockapi.io/company_Card")
.then((res)=>res.json())
.then(res=> setDatasCompany(res))
    },[])
    return (
        <Container fluid className={clsx(styles.container)}>
            <Row>
                <Col lg={1}></Col>
                <Col lg={10}>
                    <h2 className={clsx(styles.title)}>Danh sách các công ty nổi bật</h2>
                    <div className={clsx(styles.groupCompany)}>
                        {DatasCompany.map((DataCompany)=>(
                            <CardInfoCompany img ={DataCompany.image} title ={DataCompany.name} text={DataCompany.text} />

                        ))}
                    

                    </div>
                </Col>
                <Col lg={1}></Col>
            </Row>
        </Container>
    )
}