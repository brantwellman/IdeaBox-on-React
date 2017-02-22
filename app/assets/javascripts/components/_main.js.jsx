class Main extends React.Component {
  constructor() {
    super();
    this.updateIdeaState = this.updateIdeaState.bind(this);

    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    $.getJSON('/api/v1/ideas', (response) => { this.setState({ ideas: response }) });
  }

  addIdea(newIdea) {
    $.ajax({
      url: 'api/v1/ideas',
      type: 'POST',
      data: { title: newIdea.title, body: newIdea.body },
      success: (newIdea) => {
        this.updateIdeaState(newIdea);
      }
    });
  }

  updateIdeaState(newIdea) {
    const newIdeas = this.state.ideas.concat(newIdea);
    this.setState({ ideas: newIdeas })
  }

  render() {
    return(
      <div>
        <h1>IdeaBox on React</h1>
        <NewIdeaForm addIdea={this.addIdea} />
        <AllIdeas ideas={this.state.ideas} />
      </div>
    )
  }
}
