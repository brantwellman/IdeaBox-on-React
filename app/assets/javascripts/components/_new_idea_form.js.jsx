class NewIdeaForm extends React.Component {
  constructor() {
    super();

  }

  createIdea(event) {
    event.preventDefault();
    const title = this.title.value;
    const body = this.body.value;

    const idea = { title: title, body: body };
    this.props.addIdea(idea);
  }


  render() {
    return (
      <div>
        <h2>Add New Idea</h2>
        <form onSubmit={(e) => this.createIdea(e)}>
          <input ref={(input) => this.title = input } type='text' placeholder='Title'/>
          <input ref={(input) => this.body = input} type='text' placeholder='Description'/>
          <button type='submit'>Submit</button>
        </form>
      </div>

    )
  }
}
