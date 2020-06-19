import style from './style'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <div className="inner">
                <span className="logo">
                    <Link href="/"><a>Hacker Clone</a></Link>
                </span>
            </div>

            <style jsx>{style}</style>
        </header>
        
    )
}