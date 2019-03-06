import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
// import actions
import { fetching } from '../actions/';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetching();
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching,
  characters: state.charsReducer.characters
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  /* mapStateToProps replaces null here */
  mapStateToProps,
  { fetching }
)(CharacterListView);
