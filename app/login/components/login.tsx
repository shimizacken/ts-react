import * as React from 'react';

export interface ILoginProps {
    userName: string;
    password: string;
}

export class Login extends React.Component<ILoginProps, undefined> {
    render(){
        return(<div>
                <label>User Name</label><br />
                <input type="text" value={this.props.userName} />
                <label>User Name</label><br />
                <input type="password" value={this.props.password} />
            </div>
        );
    }
}