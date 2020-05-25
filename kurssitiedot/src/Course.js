import React from 'react'

const Course = (props) =>{
return (
<div> 
    <Header course={props.course.name}/>
    <Content parts={props.course.parts} />
</div>
)
}

const Header = (props) =>{
    return (
      <h2>{props.course}</h2>
    )
}

const Content = (props) =>{
    const parts = () =>
    props.parts.map(part =>
        <div key={part.id} >
            <Part name ={part.name} exercises={part.exercises}/>
        </div>)


    return (
        <div>
            {parts()}
            <Total parts = {props.parts}/>
        </div>
    )
}

const Part = (props)=>{
return <p>{props.name}, {props.exercises}</p>
}

const Total = (props)=>{
    const total = props.parts.reduce((s,p)=>{
        return s+p.exercises
      },0)
        return <h3>total of {total} exercises</h3>
      }




export default Course
