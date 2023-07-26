import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="w-full m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
            <h1 className="w-full flex text-3xl font-bold text-white">
                Yum
                <p className="text-orange-500 font-bold">
                    Eats
                </p>
            </h1>
            <p>
                Food App
            </p>
            <div className="flex justify-between md:w-[75%] my-6">
                <FaFacebookSquare className="cursor-pointer" size={30}/>
                <FaInstagramSquare className="cursor-pointer" size={30}/>
                <FaTwitterSquare className="cursor-pointer" size={30}/>
                <FaGithubSquare className="cursor-pointer" size={30}/>
                <FaDribbbleSquare className="cursor-pointer" size={30}/>
            </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
            <div>
                <h6 className="font-medium text-[#9b9b9b]">
                    Location
                </h6>
                <ul>
                    <li className="py-2 text-sm cursor-pointer">
                        New York
                    </li>
                    <li className="py-2 text-sm cursor-pointer">
                        Germany
                    </li>
                    <li className="py-2 text-sm cursor-pointer">
                        Brazil
                    </li>
                    <li className="py-2 text-sm cursor-pointer">
                        Portugal
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
