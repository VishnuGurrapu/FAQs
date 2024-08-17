// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {}

  render() {
    const {faqsList} = this.props
    return (
      <div className="appContainer">
        <h1 className="heading">FAQS</h1>
        <ul className="unorderlist">
          {faqsList.map(each => (
            <FaqItem key={each.id} faqDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
