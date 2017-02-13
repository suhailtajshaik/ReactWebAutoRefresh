import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from 'components/Header';
//import TransactionForm from 'containers/TransactionForm';
//import TransactionSummary from 'containers/TransactionSummary';
import * as AppActions from 'actions';
import './style.css';

class App extends Component {

  componentWillMount() {
    const { transactions, actions } = this.props;
    actions.requestSum(transactions);
  }

  render() {
    const {
      transactions,
      gridFields,
      summary,
      actions
    } = this.props;

    return (
      <div className="viewport">
        <h1>Hello</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { transactions } = state;
  return {
    transactions: transactions.transactions,
    summary: transactions.summary,
    gridFields: transactions.transactionsGrid
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
