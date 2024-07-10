import Accordion from "react-bootstrap/Accordion";
import Product from "../../components/product/product";

import Form from "react-bootstrap/Form";

import "./ProductCatigory.css";

function ProductCatigory() {
  return (
    <div className="product-catigory">
      <div className="header">
        <div>
          <h2>الشواحن</h2>
          <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
        </div>
        <img src="RENGAs4TtxxBiKDB5rb08cMj5LWGLnwDEENFPALt.png" alt="" />
      </div>
      <div className="wrapper">
        <div className="products-container">
          <select name="" id="">
            <option value="">مقترحاتنا</option>
            <option value="">مقترحاتنا</option>
            <option value="">مقترحاتنا</option>
            <option value="">مقترحاتنا</option>
          </select>
          <div className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="filters">
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>ما هو إيبسوم؟</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>ما هو لوريم إيبسوم؟</Accordion.Header>
              <Accordion.Body>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
                <div className="item">
                  <label htmlFor="">الجوالات</label>
                  <Form.Check name="currency" type={"radio"} id={`الجوالات`} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ProductCatigory;
