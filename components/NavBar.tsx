import { navBarValue } from '@/lib/navbar'
import Link from 'next/link'

function NavBar() {
  return <div>
  <div className='font-mono text-[14px] text-gray-1 py-2 flex gap-5 ml-6 mt-2 sticky top-0'>
    {navBarValue.map((nav) => (
        <Link 
        className="hover:text-green-2"
        href={nav.href}>
            {nav.text}
        </Link>
    ))}
  </div>
    <hr className='text-line'/>
  </div>
}

export default NavBar