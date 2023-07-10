import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import clsx from "clsx"
import styles from "./styles.module.scss"
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import Company from "./Company";
function TopCompany() {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    fetch("https://649a689bbf7c145d0238cffd.mockapi.io/company")
      .then(res => res.json())
      .then(res => setDatas(res))
  }, [])
 
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    <Container fluid className={clsx(styles.boxAll)} >
      <Row>
        <Col lg={1}>
        </Col>
        <Col lg={10}>
          <div className={clsx(styles.groupAll)}>
            <div className={clsx(styles.boxTitle)}>
              <h3>Top công ty hàng đầu </h3>
            </div>
            <div className={clsx(styles.grap)}>
            <Slider {...settings}  >
              {
                datas.map((data) => (
                    <Company key= {data.id} prop={data} />
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
  );
}

export default TopCompany