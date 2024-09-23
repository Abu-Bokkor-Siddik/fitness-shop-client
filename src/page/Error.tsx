import { useNavigate } from "react-router-dom"


const Error = () => {
    const navigate=useNavigate()
    const hangleSafe=()=>{
     navigate('/')
    }
  return (
    <div className="bg-no-repeat bg-contain lg:bg-cover" style={{ 
        backgroundImage: `url("https://i.ibb.co.com/L8VCGpx/vector-illustration-about-desert-landscape-concept-with-404-error-page-675567-6056.jpg")`,
       

      }}>
        
        <div className="pt-40 lg:pt-96 mx-auto  min-h-screen font-semibold text-center">
      <h1 className="text-3xl ">Oops! Something is wrong</h1>
     Go <button onClick={hangleSafe} className=" btn btn-warning ml-5 mt-4">Home</button>
    </div>
    </div>
  )
}

export default Error
