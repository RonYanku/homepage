import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Parallax } from 'react-parallax';


class PortfolioContact extends React.Component {

  state = {
    name: '',
    email: '',
    message: ''
  }

  onNameChange(event) {
	   this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	   this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	   this.setState({message: event.target.value})
  }

  render() {
    return (
      <div data-aos="fade-in">
        <Parallax
          className="title-bg"
          strength={500}
          bgImageStyle={{width: '1080px', height: 'auto'}}
        >
      <div id="contact-section" data-aos="fade-in">
        <Container className="text-center" id="contact-content">
          <h1 className="display-4" id="contact-headline">Contact me</h1>
          <hr className="mb-5" id="contact-hr"/>

          <Card className="pb-3 pt-3 mr-auto ml-auto" id="contact-card">
            <Container>
              <form className="" id="contact-form" action="https://formspree.io/mqkyepbr" method="POST">
              <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" className="form-control text-center" name="name" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Your E-mail Address</label>
                  <input type="email" className="form-control text-center" name="email" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
              </div>
              <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" name="message" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
              </div>
              <button type="submit" className="btn btn-block btn-primary">Submit</button>
              </form>
            </Container>
          </Card>

          <div className="mt-5">
            <p>ron.yanku2@gmail.com</p>
            <p>Israel</p>
          </div>

        </Container>
      </div>
      </Parallax>
      </div>
    )
  }
}


export default PortfolioContact;
