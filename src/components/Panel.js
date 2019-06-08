import React from 'react';
import { Redirect } from 'react-router-dom';

class Panel extends React.Component {

    render() {
        console.log(this.props.allow + " stan w Panel")
        return (
            this.props.allow ? (<p>Witaj w panelu administratora :)</p>) : (<Redirect to="/login" />)
        )
    }
}

export default Panel;


// const Panel = (props) => {
//     console.log(props.perm + " czym jest props perm w panel");

//     return (
//         // props.perm ? (<p>Witaj w panelu administratora :)</p>) : (<Redirect to="/login" />)
//         <div>chuj</div>

//     )
// }


// export default Panel;