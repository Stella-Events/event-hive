import Navbar from "../components/navbar"
import Footer from "../components/footer"


const CreateEvents = () => {

  return (
    <div>
      <Navbar />
      <div className="flex justify-center relative">
        <div className="h-10 w-max-full bg-white"></div>
      </div>

      <div className="h-[1200px] w-max-full bg-[#f8f8fa] flex flex-col justify-center gap-8">
        <h4 className="font-bold flex text-3xl justify-center">Create Event</h4>
        <div>
          <div className="flex items-center justify-center">
            <form className="w-[800px] mx-auto p-4">

              <div className="mb-8">
                {/* TITLE OF EVENT */}
                <label
                  htmlFor=""
                  className="text-gray-500 text-2 mb-1 mr-0">

                </label>
                Event Title
                <input
                  type="title"
                  id="title"
                  name="title"
                  className="h-11 w-full bg-[#ffffff] rounded-lg pl-5 mt-2"
                  placeholder="please enter title of the event..." />

              </div>

              <div className="mb-8">
                {/* VENUE */}
                <label
                  htmlFor="venue"
                  className="block text-gray-500 text-2 font-bold mb-1 ml-4">
                </label>
                Event Venue
                <input
                  type="venue"
                  name="venue"
                  id="venue"
                  className=" h-11 w-full bg-[#ffffff] rounded-lg pl-5 mt-2"
                  placeholder="please enter the event venue..." />
              </div>

              <div className="flex flex-row justify-center gap-8">
                <div className="w-1/2 mb-8">
                  {/* SART TIME */}
                  <label
                    htmlFor="time"
                    className="block text-gray-500 font-bold mb-1 ml-4">
                  </label>
                  Start Time
                  <input
                    type="text"
                    id="time"
                    name="time"
                    className=" h-11 bg-[#ffffff] w-full rounded-lg pl-5 mt-2"
                    placeholder="indicate event start time...">
                  </input>
                </div>

                <div className="w-1/2">
                  {/* END TIME */}
                  <label
                    htmlFor="time"
                    className="block text-gray-500 font-bold mb-1 ml-4">
                  </label>
                  End Time
                  <input
                    type="text"
                    id="time"
                    name="time"
                    className="h-11 bg-[#ffffff] w-full rounded-lg pl-5 mt-2"
                    placeholder="indicate event end time...">
                  </input>
                </div>
              </div>


              <div className="flex flex-row justify-center gap-8">
                <div className="w-1/2 mb-8">
                  {/* SART DATE */}
                  <label
                    htmlFor="date"
                    className="block text-gray-500 font-bold mb-1 ml-4">
                  </label>
                  Start Date
                  <input
                    type="text"
                    id="date"
                    name="date"
                    className=" h-11 bg-[#ffffff] w-full rounded-lg pl-5 mt-2"
                    placeholder="indicate event start date...">
                  </input>
                </div>

                <div className="w-1/2">
                  {/* END DATE */}
                  <label
                    htmlFor="date"
                    className="block text-gray-500 font-bold mb-1 ml-4">
                  </label>
                  End Date
                  <input
                    type="text"
                    id="date"
                    name="date"
                    className="h-11 bg-[#ffffff] w-full rounded-lg pl-5 mt-2"
                    placeholder="indicate event end date...">
                  </input>
                </div>
              </div>

              <h4 className="font-bold flex text-3xl justify-center mb-8 mt-8">Event Description</h4>

              {/* EVENT IMAGE SECTION */}
              <div className="mb-8">
                <label
                  htmlFor="image"
                  className="text-gray-500 text-2 mb-1">
                </label>
                Event Image
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="h-64 bg-[#ececec] w-full rounded-lg mt-2" />
              </div>

              {/* EVENT DESCRIPTION SECTION */}
              <div className="mb-8">
                <label
                  htmlFor="description"
                  className="text-gray-500 text-2 mb-1">
                </label>
                Event Description
                <input
                  type="description"
                  id="description"
                  name="description"
                  className="h-40 bg-[#ffffff] w-full rounded-lg mt-2" />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center">
                
                <input
                  type="submit" value="Create Event" className="h-9 bg-[#7848f4] w-full text-white rounded-lg" placeholder="Create Event">
                </input>
              </div>

            </form>
          </div>
        </div>

      </div>
      <Footer/>

    </div>
  )
}

export default CreateEvents