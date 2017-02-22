class AllIdeas extends React.Component {

  render() {
    return (
      <div>
        <h2>All of the Ideas here</h2>
          <Idea ideas={this.props.ideas}/>
      </div>
    )
  }
}
