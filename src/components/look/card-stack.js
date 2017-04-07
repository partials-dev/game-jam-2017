import React from 'react'
import CurrentCard from '../work/current-card'
import Card from './card'
import classnames from 'classnames'

const CardStack = React.createClass({
  getInitialState: function () {
    return {
      alertLeft: false,
      alertRight: false
    }
  },

  removeCard: function (side, cardId) {
    setTimeout(function () {
      if (side === 'left') {
        this.setState({alertLeft: false})
      } else if (side === 'right') {
        this.setState({alertRight: false})
      }
    }.bind(this), 3000)

    this.props.removeCard({ id: cardId, side })
    this.setState({
      alertLeft: side === 'left',
      alertRight: side === 'right'
    })
  },

  render: function () {
    const cards = this.props.cards.map(function (c, index, coll) {
      const props = {
        cardId: c.id,
        index: index,
        onOutScreen: this.removeCard,
        title: c.title,
        text: c.text,
        image: c.image
      }

      const component = (index === (coll.length - 1))
                    ? CurrentCard
                    : Card

      return React.createElement(component, props)
    }, this)

    const classesAlertLeft = classnames({
      'alert-visible': this.state.alertLeft,
      'alert-left': true,
      'alert': true
    })
    const classesAlertRight = classnames({
      'alert-visible': this.state.alertRight,
      'alert-right': true,
      'alert': true
    })

    return (
      <div>
        <div className={classesAlertLeft}>left</div>
        <div className={classesAlertRight}>right</div>
        <div id='cards'>
          {cards}
        </div>
      </div>
    )
  }
})

export default CardStack
