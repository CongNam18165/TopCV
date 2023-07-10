import clsx from "clsx"
import styles from "./styles.module.css"
import { Container, Row, Col, Card } from "react-bootstrap"
import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardSlider from "../CardSlider";
function TopField() {
    const [fieldDatas, setFieldDatas] = useState([])
    useEffect(() => {
        fetch("https://649e83e5245f077f3e9c7859.mockapi.io/box_job")
            .then(res => res.json())
            .then(res => setFieldDatas(res))

    }, [])
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        rows:2,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true
                }
            }
        ]
    };
    return (
        <Container fluid >
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <div className="row">
                        <div className={clsx(styles.boxTitle, "col")}>
                            <h3>Top nghành nghề nổi bật </h3>
                            <p>Bạn muốn tìm việc mới? Xem danh sách việc làm <span>tại đây</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className={clsx(styles.boxInfo ,"col")}>
                        <Slider {...settings}>
                            {fieldDatas.map((fieldData) => (
                            <CardSlider key={fieldData.id} img= {fieldData.image} title= {fieldData.name} text = {fieldData.amount_job}/>
                            ))
                            }
                        </Slider>
                    </div>
                        </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}
export default TopField