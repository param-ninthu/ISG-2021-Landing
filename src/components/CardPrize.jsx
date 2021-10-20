import { Col } from 'react-bootstrap';

const CardPrize =({place,prize,image,type,pcolor,anim}) => {
    return(
        <Col lg={4} md={6} sm={10} data-aos={anim} >
            <div className={type}>
                <span className="ud-pricing-header">
                    <h3 className="aw-card-header h2">
                        {place}
                    </h3>
                </span>
                <div className="ud-pricing-body">
                    <img className="aw-img effectHv" src={image} alt="no_image"/>
                    {/* This div is for image */}
                </div>
                <h4 className="aw-prize h4" style={{color:pcolor,}}>
                    {prize}
                </h4>
            </div>
        </Col>
    )  
}

export default CardPrize;