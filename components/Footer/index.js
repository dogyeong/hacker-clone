import style from './style'
import { RiGithubLine, RiArrowUpLine } from 'react-icons/ri'

export default function Footer() {
    return (
        <footer>
            <span>
                <a href="https://github.com/dogyeong" target="_blank">
                    <RiGithubLine />GitHub
                </a>
            </span>
            <span>
                <a href="#">
                    <RiArrowUpLine />Top
                </a>
            </span>

            <style jsx>{style}</style>
        </footer>
    )
}