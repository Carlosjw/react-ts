export default function App(){
  return(
    <div>
      <h1>The first {<Student name="Solange Lima"/>} ReactTS project!</h1>
    </div>
  )
}

interface StudentProps{
  name: string;
}

function Student({name}: StudentProps){
  return(
    <span style={{color: "blue"}}>{name}</span>
  )
}