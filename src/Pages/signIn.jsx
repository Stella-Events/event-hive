import google  from "../assets/image/google.png"
import signInBg from "../assets/image/signInBg.png"

const SignIn = () => {
  return (
        <div className="flex flex-row justify-between bg-[#f8f8fa]">
           <div className="flex flex-col justify-center items-center px-[100px] ">
            <span className="text-3xl font-bold mb-10">Event <span className="text-[#885ef5]">Hive</span></span>
            <h2 className="text-5xl font-bold mt-4 mb-10 py-10">Sign In to Event Hive</h2>
            <form className="space-y-4 w-full max-w-md">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium">YOUR EMAIL</label>
                <input type="email" id="email" className="p-2 border border-gray-300 rounded" placeholder="Enter your mail" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-lg font-medium py-2">
                  PASSWORD
                  <span className="text-[#E0E0E9] ml-[150px]">Forgot your password?</span>
                  </label>
                <input type="password" id="password" className="p-2 border border-gray-300 rounded mb-5" placeholder="Enter your password" />
              </div>
              
              <button type="submit" className="w-1/2 ml-[100px] py-3 bg-[#885ef5] text-white text-lg font-bold rounded flex items-center justify-center space-x-2 mb-5">
                <span>Sign in</span>
              </button>
              <p className="ml-[200px] p-2">Or</p>
              <button type="button" className="w-2/3 ml-[70px] py-3 bg-white text-[#2c3e50] border border-[#2c3e50] text-lg font-bold rounded mt-2 flex items-center justify-center space-x-2">
                <img src={google} alt="google icon" className="w-5 h-5" />
                <span>Sign Up with Google</span>
              </button>
            </form>
          </div>
          <div className="relative bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)]">
            <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)]">
              <img src={signInBg} alt="signin image" />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
            </div>
            <div className="absolute top-[310px] flex flex-col items-center ">
              <h2 className="text-white text-5xl font-bold py-11 px-[100px]">Hello Friend</h2>
              <p className="text-white mb-11 px-[60px] ">To keep connected with us provide us with your information  </p>
              <button className="text-white w-[128px] h-[49px] bg-[#6e7079] text-[20px] rounded">Signup</button>
            </div>
          </div>
         
        </div>
  
  )
}

export default SignIn