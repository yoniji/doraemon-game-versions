import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import FilterList from './filter-list';
import Footer from './footer';


class VersionsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [],
      url: props.url
    };
  }

  componentDidMount() {
    this.loadCommentsFromServer();

    setInterval(() => {
      this.loadCommentsFromServer();
    }, this.props.pollInterval);
  }

  render() {
    return <div className="page">
      <Header />
      <FilterList data={this.state.data} />
      <Footer />
    </div>;
  }

  loadCommentsFromServer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.state.url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status === 200) {
        this.setState({data: JSON.parse(xhr.responseText)});
      } else {
        this.setState({data: []});
      }
    };

    xhr.send();
  }
};


ReactDOM.render(
  <VersionsPage url="versions.json" pollInterval={3000} />,
  document.getElementById('content')
);
