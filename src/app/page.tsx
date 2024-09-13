import pic1 from '../../public/pic1.jpeg';
import pic6 from '../../public/pic6.jpeg';
import pic3 from '../../public/pic3.jpeg';
import pic4 from '../../public/pic4.jpeg';
import pic5 from '../../public/pic5.jpeg';
import pic7 from '../../public/csunRose.png'
import pic8 from '../../public/pic8.jpeg';
import pic9 from '../../public/pic10.jpeg'
import BigLinks from '@/components/BigLinks';

export default function Home() {
  return (
    <main>
      <div className="mb-8 text-3xl font-bold">
        Hi, Im Usman 👋
      </div>
      <div className="text-lg mb-6">
        Software developer and hobbyist here, working at Los Angeles Metro, ITS department. Also studying for my masters in Software Engineering at California State University Northridge.
      </div>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        {/* Image gallery in a column layout */}
        <img src={pic1.src} alt="Image 1" className="w-full h-40 mb-4 rounded-lg object-cover" />
        <img src={pic6.src} alt="Image 2" className="w-full h-80 mb-4 sm:mb-0 rounded-lg object-cover" />
        <img src={pic3.src} alt="Image 3" className="w-full h-40 sm:h-80 sm:mb-4 rounded-lg object-cover" />
        <img src={pic5.src} alt="Image 4" className="w-full h-40 mb-4 sm:mb-0 rounded-lg object-cover" />
        <img src={pic9.src} alt="Image 5" className="w-full h-40 mb-4 rounded-lg object-cover" />
        <img src={pic7.src} alt="Image 6" className="h-80 w-full rounded-lg object-cover" />
      </div>
      <div className="text-lg mb-6">
        Into rock climbing, boxing, and gymming. Love playing with new tech and working on cool projects in my spare time.
      </div>
      <BigLinks />
      <div className="text-lg mb-2">
        Been in the transportation biz for a while, aiming to make a difference in how LA moves.
      </div>
      <ul className='flex flex-col md:flex-row mt-6 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 '>
        <li>
          <a href="mailto:usmanjc98@gmail.com" className='flex items-center hover:text-neutral-800 '>
            <svg className='mr-2' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
            </svg>
            Contact Me
          </a>
        </li>
      </ul>
    </main>
  )
}
