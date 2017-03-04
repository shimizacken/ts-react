import * as React from 'react';

export interface ILoginProps {
    userName: string;
    password: string;
}

export class Login extends React.Component<ILoginProps, undefined> {
    render(){
        return(<div>
                <div>
                    <label>User Name</label>
                </div>
                <input type="text" value={this.props.userName} />
                <div>
                    <label>Password</label><br />
                </div>
                <input type="password" value={this.props.password} />
            </div>
        );
    }
}