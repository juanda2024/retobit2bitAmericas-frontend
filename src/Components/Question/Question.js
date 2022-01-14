import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Question extends Component {
    constructor() {
      super()
      this.state = {
        questions : []
      }
    }
  
    componentDidMount() {
      fetch("https://powerful-gorge-49138.herokuapp.com/questions/")
              .then(response => response.json())
              .then(data => {
                  this.setState({questions: data})
              })  
    }
  
    render() {
        const questions = this.state.questions.reverse().map((item, i) => (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title><Card.Link href={'/question/' + item._id}>{item.tittle} </Card.Link> </Card.Title>
                <Card.Text>
                  {item.detail}
                </Card.Text>
                </Card.Body>
                </Card>
            </div>
          ));
      return (
        <div className="Question">
            <div className="panel-list">{ questions }</div>
        </div>
      );
    }
  }
  
  export default Question;