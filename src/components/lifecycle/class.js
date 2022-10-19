import React, { Component } from 'react'

export class ClassLifecycle extends Component {
   constructor(props) {
      super(props)

      this.state = {
         time: new Date()
      }
      console.log("constructor")
   }

   componentDidMount() {
      console.log("componentDidMount")
      this.timer = setInterval(() => {
         this.setState({
            time: new Date()
         })
      }, 1000);
   }

   componentDidUpdate() {
      console.log("componentDidUpdate")
   }

   componentWillUnmount() {
      console.log("componentWillUnmount")
      clearInterval(this.timer)
   }
   render() {
      console.log("render")

      return (
         <div>
            <h4>{this.state.time.toLocaleTimeString()}</h4>
         </div>
      )
   }
}

export default ClassLifecycle