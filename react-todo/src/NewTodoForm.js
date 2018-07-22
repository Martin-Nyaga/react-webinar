import React from 'react'

export default class NewTodoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange (event) {
    this.setState({
      text: event.target.value
    })
  }

  handleClick (event) {
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render () {
    return (
      <div className='row mb-5'>
        <div className='col-sm-9'>
          <input
            className='form-control form-control-lg'
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
          />
        </div>
        <div className='col-sm-3'>
          <button
            className='btn btn-lg btn-primary btn-block'
            onClick={this.handleClick.bind(this)}
          >
            Add Todo
          </button>
        </div>
      </div>
    )
  }
}
