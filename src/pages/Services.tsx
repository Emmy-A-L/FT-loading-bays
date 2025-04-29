import { Link } from "react-router-dom"



const Services = () => {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center border border-gray-500 p-8 items-center gap-2 w-9/10 md:w-1/2 lg:w-1/3 backdrop-blur-md rounded-xl text-center mx-4 md:mx-6 lg:mx-8 *:w-full *:border-b *:hover:border *:border-red-400 *:px-8 *:py-3 *:rounded-lg *:backdrop-blur-sm *:bg-gray-600/45">
      <div className="border-none mb-4 text-lg bg-gray-500 backdrop-blur-none">
        Search for Service Locations or Loading Bays
      </div>
        <Link to="/search-locations/midweek-service-locations">Midweek Service Locations</Link>
        <Link to="/">CHOP Locations</Link>
        <Link to="/">Community Churches</Link>
        <Link to="/">BRT Loading Bays</Link>
        <Link to="/">Free Transport Loading Bay</Link>
      </div>
    </div>
  )
}

export default Services