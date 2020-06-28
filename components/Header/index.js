import style from './style'
import Link from 'next/link'
import Router from 'next/router'
import { RiArrowLeftLine } from 'react-icons/ri'

export default function Header({ backButton }) {
  return (
    <header>
      <div className="inner">
        {backButton && (
          <span className="back" onClick={() => Router.back()}>
            <RiArrowLeftLine size={20} />
          </span>
        )}
        <span className="logo">
          <Link href="/">
            <a>Hacker Clone</a>
          </Link>
        </span>
      </div>

      <style jsx>{style}</style>
    </header>
  )
}
