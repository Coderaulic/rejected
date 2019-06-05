import React, { Component } from 'react';
import Scroll from './Scroll';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { connect } from 'react-redux';
import { companies } from '../companies';
import { setSearchField } from './actions';

// Rejected class to display job search experience w/ a Co.
class Rejected extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: companies }
  }

  componentDidMount() {
    // The dataset is mostly sorted but when adding new ones, this will guarantee to sort the companies alphabetically by name.
    const sortedList = companies.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.setState({ companies: sortedList });
    this.props.onSearchChange();
  }

  render() {
    const { companies } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredCompanyList = companies.filter(companies => {
      return companies.name.toLowerCase().includes(searchField.trim().toLowerCase());
    });

    return (
      <div className='rejected'>
        <SearchBox searchChange={ onSearchChange } />
        <Scroll>
          <CardList companies={ filteredCompanyList } />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { searchField: state.searchCompanies.searchField }
}

const mapDispatchToProps = (dispatch) => {
  return { onSearchChange: (event) => dispatch(setSearchField(event)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rejected);
