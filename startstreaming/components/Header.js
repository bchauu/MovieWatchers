import Link from "next/link";

function Header() {

    return (
        <div className="header">
            <Link href={'/'}>
                <h1>Movie Watchers</h1>
            </Link>
        </div>
    )
}

export default Header;