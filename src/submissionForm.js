import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

class SubmissionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: ''
        };
        
    }
    onSubmit(){
        this.props.onSubmit({guess: this.state.guess});
    }
    
    handleGuessChange(event1) {
        var input = document.getElementById('myInput');
        let value=event.target.value;
        input.onkeydown = (function() {
        var key = event.keyCode || event.charCode;
        if(key == 8 || key == 46)
        this.setState({guess: ""});
        }).bind(this);
        
        if(event1.target.value=='r' || event1.target.value=='R' || event1.target.value=='P' || event1.target.value=='p' || event1.target.value=='S' || event1.target.value=='s'){
            this.setState({guess: event1.target.value});
        }
        
    }
    componentDidMount(){
        document.getElementById("myInput")
        .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
        document.getElementById("submitButton").click();
        }
    });

    }

    render() {
        if(this.props.neverWon==true){
        return (
            <div className='comment-form'>

                <label>
                    Your guess:
                    <input onChange={this.handleGuessChange.bind(this)} id="myInput" type="text" maxLength="1" value={this.state.guess}/>
                </label>
                <button className='comment-form' onClick={this.onSubmit.bind(this)} id="submitButton">
                    Submit
                </button>
            </div>
        );
    }
    else{
        return null;
    }
    }
}
SubmissionForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SubmissionForm;
