import React from 'react';


// state enables the component to keep track of changing information in between renders. 
// More specifically, the state of a component is an object that holds information that may change over the lifetime of the component.
// props are an object which holds information to control a components behavior.

// ● Props are immutable(read only). Once set they can’t be changed
// ● State is observable. It can hold data that may change over time
// ● Props are set by the parent component


// export class Greetings extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             num : 0,
//         }
//     }

//     incrementNumber = () => {
//         this.setState({
//             num : this.state.num + 1
//         })
//     }
//     decrementNumber = () => {
//         this.setState({
//             num : this.state.num - 1
//         })
//     }

//     render() {
//         const { name, hobby } = this.props;
//         const { num } = this.state;
//         return (
//             <div>
//                 {/* <h1>Hello, Welcome {name}</h1> */}
//                 <h1>{num}</h1>
//                 <div>
//                     <button onClick={this.incrementNumber}>ADD</button>
//                     <button onClick={this.decrementNumber}>SUBTRACT</button>
//                 </div>
//             </div>
//         )
//     }
// }

export function Greetings(props) {
    const { name, hobby } = props
    const [num, setNum] = React.useState(0)

    const incrementNumber = () => {
        setNum(prev => prev + 1)
    }
    const decrementNumber = () => {
        setNum(prev => prev - 1)
    }
    return (
        <div>
            {/* <h1>Hello, Welcome . My first hobby is {hobby.hobby1}</h1> */}
            <h1>{num}</h1>
            <div>
                <button onClick={incrementNumber}>ADD</button>
                <button onClick={decrementNumber}>SUBTRACT</button>
            </div>
        </div>
    )
}
