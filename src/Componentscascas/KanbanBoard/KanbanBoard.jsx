import React from "react";
import AddTask from "../AddTask/AddTask";
import Trash from "../Trash/Trash";
import KanbanColumn from "./../KanbanColumn/KanbanColumn";
import "./KanbanBoard.css";

/*
 * The Kanban Board React component
 */
class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projects: [
        {
          title: "Leetcode",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ",
          project_stage: 1,
        },
        {
          title: "React Native",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ",
          project_stage: 1,
        },
        {
          title: "Learn Trees",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ",
          project_stage: 1,
        },
        {
          title: "Codechef",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ",
          project_stage: 2,
        },
        {
          title: "Study",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ",
          project_stage: 3,
        },
        {
          title: "Assignment",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ",
          project_stage: 3,
        },
      ],
      draggedOverCol: 0,
    };
    this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    this.addTask = this.addTask.bind(this);
    this.columns = [
      { name: "ToDo", stage: 1 },
      { name: "In Progress", stage: 2 },
      { name: "Done", stage: 3 },
    ];
  }
  //this is called when a Kanban card is dragged over a column (called by column)
  handleOnDragEnter(e, stageValue) {
    this.setState({ draggedOverCol: stageValue });
  }

  //this is called when a Kanban card dropped over a column (called by card)
  handleOnDragEnd(e, project) {
    const updatedProjects = this.state.projects.slice(0);
    updatedProjects.find((projectObject) => {
      return projectObject.name === project.name;
    }).project_stage = this.state.draggedOverCol;
    this.setState({ projects: updatedProjects });
  }

  addTask(data) {
    console.log(data);
    this.setState((s) => ({
      ...s,
      projects: [...s.projects, data],
    }));
  }

  render() {
    // if (this.state.isLoading) {
    //   return <h3>Loading...</h3>;
    // }

    return (
      <>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <AddTask addTask={this.addTask} />
          <Trash
            onDragEnter={this.handleOnDragEnter}
            onDragEnd={this.handleOnDragEnd}
          />
        </div>
        <div className="board__container">
          {this.columns.map((column) => {
            return (
              <KanbanColumn
                name={column.name}
                stage={column.stage}
                projects={this.state.projects.filter((project) => {
                  return parseInt(project.project_stage) === column.stage;
                })}
                onDragEnter={this.handleOnDragEnter}
                onDragEnd={this.handleOnDragEnd}
                key={column.stage}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default KanbanBoard;
