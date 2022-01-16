import React from "react";
import KanbanCard from "../KanbanCard/KanbanCard";
import "./KanbanColumn.css";

class KanbanColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseIsHovering: false };
  }

  componentDidMount() {
    this.setState((s) => ({
      ...s,
      stage: this.props.projects[0].project_stage,
    }));
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      mouseIsHovering: false,
    });
  }

  generateKanbanCards() {
    return this.props.projects.slice(0).map((project) => {
      return (
        <KanbanCard
          project={project}
          key={project.name}
          onDragEnd={this.props.onDragEnd}
        />
      );
    });
  }

  render() {
    return (
      <div
        className={`column__container column__container${this.state.stage}`}
        onDragEnter={(e) => {
          this.setState({ mouseIsHovering: true });
          this.props.onDragEnter(e, this.props.stage);
        }}
        onDragExit={(e) => {
          this.setState({ mouseIsHovering: false });
        }}
      >
        <h4 className={`column__header column__header${this.state.stage}`}>
          {this.props.name}
        </h4>
        {this.generateKanbanCards()}
        <br />
      </div>
    );
  }
}

export default KanbanColumn;
