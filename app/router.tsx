import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface RouterProps {

}

export class RouterApp extends React.Component<RouterProps, undefined> {
   render() {
      return (
         <div>
            <ul>
               <li>Login</li>
               <li>Project</li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}