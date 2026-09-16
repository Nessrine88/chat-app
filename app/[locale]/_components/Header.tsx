'use client'

import { useRouter, usePathname } from "next/navigation" // next-intl's locale-aware hooks
import { useParams } from "next/navigation"

const languages = ['en', 'fr', 'ar']

const Header = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const newPathname = pathname.replace(/^\/[^/]+/, `/${newLocale}`);
    router.replace(newPathname);
  }

  return (
    <header className='bg-red-400 mb-10'>
      <div className='max-w-7xl mx-auto py-5 flex justify-between items-center'>
        <div>logo section</div>
        <div>search section</div>
        <div>
          <select onChange={handleLanguage} value={params.locale as string}>
            {languages.map((lan) => (
              <option key={lan} value={lan}>
                {lan}
              </option>
            ))}
          </select>
          User section
        </div>
      </div>
    </header>
  )
}

export default Header