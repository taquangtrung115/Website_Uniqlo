import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Home from "./../../screens/Home/index";
import { Route } from "react-router-dom";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtPhone: "",
      txtPassword: "",
      isCheckLogin: false
    };
  }

  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    var { txtPhone, txtPassword } = this.state;
    if (txtPhone === "admin" && txtPassword === "admin") {
      var admin = {
        txtPhone: txtPhone,
        txtPassword: txtPassword,
      };

      sessionStorage.setItem("admin", JSON.stringify(admin));
      this.setState({isCheckLogin: true})
    }
  };
  render() {
    var {isCheckLogin}=this.state;
    console.log(isCheckLogin);
    if (isCheckLogin) {
      return <Route  pathname="/home/dashboard" component={Home} />;
    }
    return (
      <Container>
        <Row>
          <Col>
            <Form style={{ paddingTop: "5%" }} onSubmit={this.onSubmit}>
              <h3 className="text-center font-weight-normal">
                CHÀO MỪNG BẠN ĐẾN VỚI UNIQLO
              </h3>
              <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Số điện thoại"
                  name="txtPhone"
                  onChange={this.onChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Mật khẩu"
                  name="txtPassword"
                  onChange={this.onChange}
                />
              </Form.Group>

              <Button
                variant="outline-secondary"
                type="submit"
                style={{ transform: "translateX(322%)" }}
              >
                Đăng Nhập
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default index;
