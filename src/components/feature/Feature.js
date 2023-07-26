import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'


const Feature = () => {
  const sliders = [
    {
        url: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
    {
        url: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        url: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlider = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlider = () => {
    const isLastSlide = currentIndex === sliders.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const moveToNextSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="h-[500px] py-4 px-4 relative group flex flex-col items-center justify-center">
      <div
        className="w-[90%] h-full rounded-2xl bg-center bg-cover duration-500"
        style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
      >
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={previousSlider} />
      </div>
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlider}/>
      </div>
      <div className="flex top-4 justify-center py-2">
        {
          sliders.map((sliderItems, slideIndex) => (
            <div 
              key={slideIndex} 
              className="text-2xl cursor-pointer"
              onClick={() => moveToNextSlide(slideIndex)}
            >
                <RxDotFilled size={25}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Feature
