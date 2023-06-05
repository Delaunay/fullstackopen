
const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  
  const Part = ({part}) => {
    return (<p> {part.name} {part.exercises}</p>);
  }
  
  const Content = (props) => {
    return props.parts.map((part, i) => <Part key={part.id} part={part}></Part>)
  }
  
  const Total = (props) => {
    let count = props.parts.reduce((acc, p) => {
      return acc + p.exercises
    }, 0);
    
    return (<strong>Total of {count} exercises</strong>);
  }
  
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
      </div>
    )
  }
  
  export default Course;