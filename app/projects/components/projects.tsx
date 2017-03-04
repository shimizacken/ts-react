import * as React from 'react';

export interface ProjectsProps {

}

export class Projects extends React.Component<ProjectsProps, undefined> {
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Total
                        </th>
                    </thead>
                    <tr>
                        <td>1</td>
                        <td>My Project</td>
                        <td>351,535</td>
                    </tr>
                </table>
            </div>
        );
    }
}