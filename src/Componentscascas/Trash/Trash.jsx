import React from "react";
import "./Trash.css";

class Trash extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseIsHovering: false };
  }

  componentDidMount() {
    this.setState((s) => ({
      ...s,
      stage: -1,
    }));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      mouseIsHovering: false,
    });
  }

  render() {
    return (
      <div
        className="trash"
        onDragEnter={(e) => {
          this.setState({ mouseIsHovering: true });
          this.props.onDragEnter(e, this.props.stage);
        }}
        onDragExit={(e) => {
          this.setState({ mouseIsHovering: false });
        }}
      >
        <div>Trash</div>
      </div>
    );
  }
}

export default Trash;
