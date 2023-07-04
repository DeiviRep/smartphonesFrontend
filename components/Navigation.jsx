import Link from "next/link"

function Navigation() {
    return (
        <>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/detalles">Detalles</Link></li>
            </ul>
        </>
    )
}

export default Navigation