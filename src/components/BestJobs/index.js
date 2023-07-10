import styles from "./styles.module.scss"
import clsx from "clsx"
import { Container, Row, Col } from "react-bootstrap"
import suggest from "../../assets/img/suggest.png"
import { useEffect,useState } from "react"
import BoxCompany from "./boxCompany"
function BestJobs() {
    const [companiesData, setCompaniesData] = useState([])
    useEffect(()=>{
        fetch("https://649a689bbf7c145d0238cffd.mockapi.io/CompaniesData")
        .then(res => res.json())
        .then(res => setCompaniesData(res) )
    },[])
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCompanies, setCurrentCompanies] = useState([]);
    const companiesPerPage = 9;
    const totalPages = Math.ceil(companiesData.length / companiesPerPage);
    useEffect(() => {
        const startIndex = (currentPage - 1) * companiesPerPage;
        const endIndex = startIndex + companiesPerPage;
        const slicedCompanies = companiesData.slice(startIndex, endIndex);
        setCurrentCompanies(slicedCompanies);
    }, [currentPage, companiesData, companiesPerPage]);
    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }
    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    return (
        <Container fluid className={clsx(styles.boxAll)}>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <Row>
                        <Col lg={8} md={8}>
                            <div className={clsx(styles.boxTitle)}>
                                <h2>Tin tuyển dụng, việc làm tốt nhất </h2>
                                <img src={suggest} alt="anh minh hoa" />
                            </div>
                        </Col>
                        <Col lg={4} md={4} className="d-none d-md-block">
                            <div className={clsx(styles.boxControl)}>
                                <p>Xem tất cả </p>
                                <i class="fa-solid fa-chevron-left"></i>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={2} md={12}>
                    <div className={clsx(styles.boxFilter)}>
                        <i class="fa-solid fa-arrow-up-wide-short"></i>
                        <p>Lọc theo: </p>
                        <select>
                            <option>Địa điểm</option>
                            <option>Mức lương</option>
                            <option>Ngành nghề</option>
                            <option>Kinh nghiệm</option>
                        </select>
                    </div>
                </Col>
                <Col lg={8} md={12}>
                    <div className={clsx(styles.boxLocation)}>
                        <span><i class="fa-solid fa-chevron-left"></i></span>
                        <p>Ngẫu nhiên</p>
                        <p>Hà Nội</p>
                        <p>Thành phố Hồ Chí Minh</p>
                        <p>Miền Bắc</p>
                        <p>Miền Nam</p>
                        <span><i class="fa-solid fa-chevron-right"></i></span>
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
            <Row>
                <Col lg={1}>
                </Col>
                <Col lg={10}>
                    <div className={clsx(styles.boxCompanies)}>
                        {
                          currentCompanies.map((data)=>(
                            <BoxCompany key= {data.id} prop={data}/>
                          ))  
                        }
                    </div>
                    <div className={clsx(styles.numberPages)}>
                        <i onClick={handlePrevPage} class="fa-solid fa-chevron-left"></i>
                        <p> {currentPage}/{totalPages} trang</p>
                        <i onClick={handleNextPage} class="fa-solid fa-chevron-right"></i>
                    </div>
                </Col>
                <Col lg={1}>
                </Col>
            </Row>
        </Container>
    )
}
export default BestJobs