import Image from 'next/image'
import { footerLinks } from '../constants'
import { BackToTopButton } from '../components';

const Footer = () => {
  return (
    <footer className="flex md:justify-around py-10 flex-col md:flex-row items-center justify-center relative">
      <div className="w-auto md:items-start flex-col items-center">
        <div className="flex flex-col items-center md:items-start justify-start">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          <span className="text-xs uppercase">Modern Interior</span>
        </div>
        <ul className="flex justify-between w-full max-w-xs pt-5 social">
          <li><a icon-content="fb" className="" href="/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a icon-content="li" className="" href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a icon-content="tw" className="" href="/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>

      <div className="text-center">
        <nav aria-label="Sitemap">
          <ul className="text-xs md:flex pt-5 md:pt-0">
            {footerLinks.map((nav, index) => (
                <li key={nav.id} className="mx-4 text-sm py-2 font-light">
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs pt-5">@2023 Deckbase. All rights reserved.</p>
        <a className="text-xs font-semibold" href="/">Terms & Conditions</a>
      </div>

      <div className="text-center pt-5 md:pt-0 md:marker:text-right">
        <p><a className="text-xs" href="/" target="_blank" rel="noreferrer">4600 E Washington St<br/>Phoenix, Arizona</a></p>
        <p className="pt-2"><a className="text-xs font-bold" href="tel:855-255-7585">(855) 255-7585</a></p>
      </div>

      <BackToTopButton/>
    </footer>
  )
}

export default Footer