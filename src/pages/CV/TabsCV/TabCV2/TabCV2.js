import clsx from "clsx"
import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import ContainerSample from "../../../../components/ContainerSample/containerSample"
export default function TabCV2() {
    const [datasCard, setDatasCard] = useState([])
    useEffect(() => {
        fetch("https://649e83e5245f077f3e9c7859.mockapi.io/sample_CV")
            .then((res) => res.json())
            .then((res) => setDatasCard(res))
    }, [])
    return (
        <Container fluid style={{ backgroundColor: "#fff" }}>
            <Row>
                <Col >
                    <p className={clsx(styles.header)}>Tiếp tục trải nghiệm giao diện và các tính năng quen thuộc của phiên bản <span>CV Builder 1.0</span> - Công cụ tạo CV online số 1 Việt Nam với các mẫu CV dưới đây:</p>
                    <div className={clsx(styles.container)}>
                        {datasCard.map((dataCard)=>(
                            <ContainerSample title={dataCard.name} img={dataCard.image} />
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}