var React = require('react');
var ReactDOM = require('react-dom');
var TableInput = require('./TableInput');
var $ = require('jquery');

var App = React.createClass({


  getInitialState: function() {
    // "schema":{
    // "database": {
    //   "type"     : 'sql',
    //   "username" : 'Sequelize.String',
    //   "password" : 'Sequelize.String',
    //   "url"      : 'localhost://3000'
    // },
    //
    // "data": {
    //   "table": 'table_name',
    //   "colORdocs" : [{
    //     "username" : "johnCrackersmacker",
    //     "password" : "yabbadabbado",
    //     "url" : "www.super.com"
    //     }]
    //   }
    // }
    var state = {
      columns: 0,
      database: {
        type: 'sql',
        username: 'Sequelize.String',
        password: 'Sequelize.String',
        url : 'localhost://3000'
      },
      data: {
        table: '',
        colORdocs: []
      }
    };

    return state;
  },

  makeTableSchema: function(e) {
    console.log(e);
    e.preventDefault();
    // this.setState({columns: $('#numberOfColumns').val(), table: $('#TableInput').val(), un: $('#UsernameOfDatabase').val(), pw: $('#PasswordOfDatabase').val()});
    // this.sendInfoToForm

    // this.state.sqlSchema = [];
    this.state.data.colORdocs = [];
    var currentState = this.state;
    for (var i = 0; i < this.state.columns; i++) {
      var col = {};
      col.name = document.getElementById('colnames' + i).value;
      col.type = document.getElementById('coltype' + i).value;
      // console.log(name);
      // console.log(type);
      if (col.name === '') return alert('Add name to column ' + (i + 1));
      currentState.data.colORdocs.push(col);
    }
    currentState.data.table = document.getElementById('tableName').value;
    currentState.database.username = document.getElementById('usernameOfDb').value;
    currentState.database.password = document.getElementById('passwordOfDb').value;
    // col.name = name;
    // col.type = type
    // console.log('currentState.sqlSchema: ', currentState.sqlSchema);
    console.log('currentState.data.colORdocs: ', currentState.data.colORdocs);
    console.log('currentState ', currentState);
    this.state.columns = 0;
    this.setState(currentState);
  },

  makeCol: function() {
    // console.log('makeColstate: ', this.state);
    var currentState = this.state;
    currentState.columns++;
    this.setState(currentState);
  },

  rmCol: function() {
    if (this.state.columns !== 0) {
      var currentState = this.state;
      currentState.columns--;
      this.setState(currentState);
    }
  },

  render: function () {
    // var tableArr = [];
    // this.state.sqlSchema.forEach(val => {
    //   tableArr.push(val);
    // })

    return (
      <div id='App' >
        <TableInput rmCol={this.rmCol} makeCol={this.makeCol} makeTableSchema={this.makeTableSchema} state={this.state} string={this.string} create={this.createTable}/>
     </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
