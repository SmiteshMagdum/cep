import { navBarValue } from '@/lib/navbar'
import Link from 'next/link'

function NavBar() {
  return <div>
  <div className='font-mono text-[14px] text-gray-1 py-2 flex gap-3 lg:gap-10 mx-5 mt-2 sticky top-0'>
    {navBarValue.map((nav) => (
        <Link 
        className="hover:text-green-2"
        href={nav.href} key={nav.text}>
            {nav.text}
        </Link>
    ))}
  </div>
    <hr className='text-line'/>
  </div>
}

export default NavBar