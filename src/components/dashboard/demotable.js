import React from "react";
import { Table } from "react-bootstrap";

class DemoTable extends React.Component {
  render() {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Task</th>
                <th>Scheduled Date</th>
                <th>Assigned To</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Testing Task 1</td>
                <td>04/04/2022</td>
                <td>Mark</td>
                <td>Not Done</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Testing Task 2</td>
                <td>04/04/2022</td>
                <td>Mark</td>
                <td>Not Done</td>
                </tr>
                <tr>
                <td>3</td>
                <td>Testing Task 3</td>
                <td>04/04/2022</td>
                <td>Mark</td>
                <td>Not Done</td>
                </tr>
                <tr>
                <td>4</td>
                <td>Testing Task 4</td>
                <td>04/04/2022</td>
                <td>Mark</td>
                <td>Not Done</td>
                </tr>
                <tr>
                <td>5</td>
                <td>Testing Task 5</td>
                <td>04/04/2022</td>
                <td>Mark</td>
                <td>Not Done</td>
                </tr>
                <tr>
                <td>6</td>
                <td>Testing Task 6</td>
                <td>04/04/2022</td>
                <td>Mark</td>
                <td>Not Done</td>
                </tr>
            </tbody>
            </Table>
    );
  }
}
export default DemoTable;
