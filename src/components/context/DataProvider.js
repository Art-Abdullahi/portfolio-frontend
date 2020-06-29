import React, { Component, createContext } from "react";

export const DataContext = createContext();

class DataProvider extends Component {
  state = {
    name: "ali",
    data: {},
    projects: [],
  };

  async componentDidMount() {
    const url = "https://pp-api-02.herokuapp.com/api/info/";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      data: data,
      projects: data[0].projects,
    });
  }
  render() {
    return (
      <div>
        <DataContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </DataContext.Provider>
      </div>
    );
  }
}

export const Consumer = DataContext.Consumer;

export default DataProvider;
