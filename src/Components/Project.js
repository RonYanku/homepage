import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import Badge from 'react-bootstrap/Badge'


class Project extends React.Component {
  state = {
    projectImage: '',
    projectImageDetail: '',
    projectImageCode: '',
    projectTitle: '',
    projectDescription: '',
    projectGitHub: '',
    projectLink: '',
    modalDescription: '',
  }

  componentDidMount() {
    this.setState ({
      projectImage: this.props.image,
      projectImageDetail: this.props.imageDetail,
      projectImageCode: this.props.imageCode,
      projectTitle: this.props.title,
      projectDescription: this.props.description,
      projectGithub: this.props.github,
      projectLink: this.props.link,
      modalDescription: this.props.modal,
      modalOpen: false,
      modalBadges: this.props.badges
    })
  }

  modalShow = e => {
    this.setState ({
      modalOpen: true
    })
  }

  modalHide = e => {
    this.setState ({
      modalOpen: false
    })
  }

  render () {
    return (
      <Col xs={12} sm={6} lg={4} className="mb-4">

      <>
        <Modal
          show={this.state.modalOpen}
          onHide={this.modalHide}
          dialogClassName="project-modal"
          aria-labelledby="project-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title className="project-modal-title">
              {this.state.projectTitle}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>

              <Col md={6} sm={12}>
                <Carousel className="project-carousel">
                {/* <div className="image-size"> */}
                  {this.props.images.map( (image) => 
                      <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt="project slide"
                      />
                      </Carousel.Item>
                    )}


                </Carousel>
              </Col>

              <Col md={6} sm={12} className="d-flex flex-column">
                <p>
                  {this.state.modalDescription}
                </p>
                <p>
                  {this.props.badges.map((badge) => 
                        <Badge className="PortfolioBadge" variant="dark">
                        {badge}
                        </Badge>
                  )}
                  {/* <Badge variant="dark">{this.state.modalBadges}</Badge> */}
                </p>
                <Button className="mt-auto" href={this.state.projectLink} block size="sm" variant="success">Live Version</Button>
                <Button href={this.state.projectGithub} block size="sm" variant="primary">GitHub</Button>
              </Col>

            </Row>
          </Modal.Body>
        </Modal>
      </>
      <a style={{ cursor: 'pointer' }} onClick={this.modalShow}>
        <Card className="h-100" data-aos="fade-in">
          <Card.Img className="project-image-size" variant="top" src={this.props.images[0]} />
          <hr className="mt-0 pt-0 mb-0 pb-0 card-hr" />
          <Card.Body className="d-flex flex-column">
            <h3>{this.state.projectTitle}</h3>
            <hr className="project-title-hr mb-2 mt-1"/>
            <Card.Text>
              {this.state.projectDescription}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
      </Col>
    )
  }
}


export default Project