// Write your code here.
import {Component} from 'react'
import './index.css'
class FaqItem extends Component {
  state = {
    isAnsShowed: false,
  }
  onClickBtn = () => {
    this.setState(prevState => ({isAnsShowed: !prevState.isAnsShowed}))
  }
  render() {
    const {isAnsShowed} = this.state
    const {id, questionText, answerText} = this.props.faqDetails
    const imgUrl = isAnsShowed
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const imgAlt = isAnsShowed ? 'minus' : 'plus'
    return (
      <li className="item">
        <div className="questionContainer">
          <h1 className="question">{questionText}</h1>
          <button onClick={this.onClickBtn} className="btn">
            <img className="img" src={imgUrl} alt={imgAlt} />
          </button>
        </div>
        {isAnsShowed && (
          <div className="answerContainer">
            <hr className="separator" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
