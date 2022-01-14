import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import SignUp from "../SignUp/Signup";
import Question from "../Question/Question";
import QuestionDetail from "../Question/QuestionDetail";
import NewQuestion from "../Question/newQuestion";
import NewAnswer from "../Answer/newAnswer";
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: true,
    };
  }

  toggleRender = (RTA) => {
    this.setState({ showPage: RTA });
  };

  render() {
    const { showPage } = this.state;
    console.log(showPage);
    if(showPage){
      return (
        <div>
        <Router>
            <Navbar />
            <Routes>
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path="/question/:id" element={<QuestionDetail showPage={this.showPage}/>}/>
            <Route path='/createQuestion' element={<NewQuestion />} />
            <Route path='/createResponse' element={<NewAnswer />} />
            </Routes>
        </Router>
          <Question/>
        </div>
      );
    }
    else{
      return (<div></div>);
    }
  }
}
export default App;