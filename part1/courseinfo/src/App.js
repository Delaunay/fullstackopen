
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  let part = props.part;
  return (<p>{part.name} {part.exercises}</p>);
}

const Content = (props) => {
  let content = [];

  for (let i = 0; i < props.parts.length; i++) {
    let part = props.parts[i];
    content.push((<Part part={part}></Part>))
  }

  return content;
}

const Total = (props) => {
  let count = 0;
  
  for (let i = 0; i < props.parts.length; i++) {
    let part = props.parts[i];
    count += part.exercises;
  }

  return (<p>Number of exercises {count}</p>);
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default App