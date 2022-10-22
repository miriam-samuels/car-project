import React, { Component } from 'react'

export class ClassLifecycle extends Component {
   constructor(props) {
     super(props)
      console.log("constructor");
     this.state = {
        time : new Date()
     }
   }

   componentDidMount(){
      this.timer = setInterval(() => {
         this.setState({
            time : new Date()
         })
      }, 1000)
   }

   componentDidUpdate(){
      console.log("time is running");
   }

   componentWillUnmount(){
      clearInterval(this.timer)
   }

  render() {
    return (
      <div>
         <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default ClassLifecycle