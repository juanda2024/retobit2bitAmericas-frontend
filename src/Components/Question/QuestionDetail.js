import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class QuestionDetail extends Component {
    constructor(props) {
      super(props)
      this.state = {
        tittle: "",
        description: "",
        answers : [],
        answersDetail : []
      }
    }
    componentDidMount() {
      let id = "61e0a3803c79f139408388b0";
      fetch("https://powerful-gorge-49138.herokuapp.com/questions/id/" + id)
      .then(response => response.json())
      .then(data => {
        console.log(data[0].answers);
          this.setState({
              tittle: data[0].tittle,
              description: data[0].detail,
              answers: data[0].answers
          }, () => {
            this.afterSetStateFinished();
        });
      }) 
    }

    componentWillUnmount() {
      this.props.showPage = false;
    }

    afterSetStateFinished(){
      for (let index = 0; index < this.state.answers.length; index++) {
          const element = this.state.answers[index];
          fetch("https://powerful-gorge-49138.herokuapp.com/answers/" + element)
          .then(response => response.json())
          .then(data => {
              this.setState({ answersDetail: [...this.state.answersDetail, data[0]] }) 
          }) 
        }
    }
  
    render() {
        const answers = this.state.answersDetail.reverse().map((item, i) => (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{item.detail}</Card.Title>
                    </Card.Body>
                </Card>
            </div>
          ));
        
      return (
        <div className="QuestionDetail">
                <Card>
                    <Card.Body>
                        <Card.Title>{this.state.tittle}</Card.Title>
                <Card.Text>
                  {this.state.description}
                </Card.Text>
                </Card.Body>
                </Card>
                <Button href="/createResponse" variant="success">Crear respuesta</Button>{' '}
                <h4>Respuestas</h4>
            <div className="panel-list">{ answers }</div>
        </div>
      );
    }
  }
  
  export default QuestionDetail;