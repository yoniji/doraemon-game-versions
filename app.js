import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return <div className="header">
      <h1><i className="fa fa-archive" /> Doraemon Game Versions</h1>
      <p className="caption">This is a small project designed to make obtaining versions of Doraemon easy and simple.</p>
    </div>;
  }
}

class VersionItem extends React.Component {
  render() {
    const createdAt = new Date(Date.parse(this.props.createdAt));
    const createdAtStr =
      `${createdAt.getFullYear()} /\
      ${createdAt.getMonth()} /\
      ${createdAt.getDate()}\
      ${createdAt.getHours()}:${createdAt.getMinutes()}:${createdAt.getSeconds()}`;

    return <div className="versionItem">
      <div className="versionName">{this.props.children}</div>
      <div className="createdAt">{createdAtStr}</div>
      <div className="download">
        <a className="download-ios downloadBtn" href="{this.props.ios}">
          <i className="fa fa-apple" />
        </a>
        <a className="download-android downloadBtn" href="{this.props.android}">
          <i className="fa fa-android" />
        </a>
        <a className="download-server downloadBtn" href="{this.props.server}">
          <i className="fa fa-server" />
        </a>
      </div>
    </div>
  };
}

class FilterItem extends React.Component {
  render() {
    const versionNodes = this.props.versions.map((versionData) => {
      return <VersionItem
        key={versionData.id}
        ios={versionData.ios}
        android={versionData.android}
        server={versionData.server}
        createdAt={versionData.createdAt}>
        {versionData.versionName}
      </VersionItem>;
    });

    return <div className="filterItem">
      <h2 className="filterName">
        {this.props.title}
      </h2>
      <ul className="versionList">
        {versionNodes}
      </ul>
    </div>;
  }
};

class FilterList extends React.Component {
  render() {
    const filterNodes = this.props.data.map((filterData) => {
      return <FilterItem
        title={filterData.filterName}
        key={filterData.id}
        versions={filterData.versions} />;
    });

    return <div className="filterList">
        {filterNodes}
    </div>;
  }
};


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

  handleSubmit(url) {
    this.setState({url: url});
  }
};


ReactDOM.render(
  <VersionsPage url="versions.json" pollInterval={3000} />,
  document.getElementById('content')
);
