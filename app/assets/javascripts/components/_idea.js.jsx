class Idea extends React.Component {
  render() {
    const ideas = this.props.ideas;
    return (
      <div>
        {
          ideas.map(idea =>
            <div key={idea.id}>
              <h3>{idea.title}</h3>
              <h4><strong>Idea Quality:</strong> {idea.quality}</h4>
              <p>{idea.body}</p>
            </div>
          )
        }
      </div>
    )
  }
}
