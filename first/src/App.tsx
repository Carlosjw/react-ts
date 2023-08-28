import Student from "./components/student"
import Footer from "./components/footer"
import Header from "./components/header"

export default function App() {
  return (
    <>
      <Header title="Alunos do Curso React + TypeScript"/>
      <Student name="Solange Lima" age={35} />
      <Footer/>
    </>
  )
}

