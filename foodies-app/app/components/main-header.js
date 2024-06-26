import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
    return (
        <header>
            <Link href="/">
                <img src={logoImg.src} alt="Plate with food on it" />
                NextLevel Food
            </Link>

            <nav>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Foodies Community</Link>
                </li>
            </nav>
        </header>
    )
}