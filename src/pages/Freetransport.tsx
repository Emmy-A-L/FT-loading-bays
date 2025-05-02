import AreaNames from "../components/AreaNames"


const Freetransport = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16 md:pt-18">
      <div className="flex flex-col justify-center border border-gray-500 p-8 items-center gap-2 w-9/10 md:w-1/2 lg:w-1/3 h-[550px] backdrop-blur-md rounded-xl text-center mx-4 md:mx-6 lg:mx-8 *:w-full *:px-8 *:py-3 *:rounded-lg *:backdrop-blur-sm *:bg-gray-600/45">
        <div className="border-none mb-4 text-lg bg-gray-500 backdrop-blur-none">
          Search for Free Transport Loading Bays
        </div>
        <AreaNames />
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Freetransport