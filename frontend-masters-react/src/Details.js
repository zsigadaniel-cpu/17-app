import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./themeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const result = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const resultData = await result.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        resultData.pets[0]
      )
    );
  }

  toggleModal = () => this.setState({showModal: !this.state.showModal})
  adopt = () => {
    window.location = 'http://bit.ly/pet-adopt'
  }
  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          {/* <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2> */}
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button onClick={ this.toggleModal } style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {
            showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="buttons">
                    <button onClick={this.adopt}>Yes</button>
                    <button onClick={this.toggleModal}>No, I'm a monster</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}