
import react,{useState} from 'react'
const Service = () => {
  const [show,setShow] = useState(true);
  const toggleShow =()=>{
    setShow(show===true?false:true)
  }
  return (
   <div> <button onClick={toggleShow}>{show?"don't know":"i know"}</button>
    {show&&<h1>Lorem ipsum dolor sit amet.</h1>}
    </div>
  )
}

export default Service