import Link from "next/link";

export default function Sidebar({ toggle }) {
  return (
    <div>
      <button className="absolute right-0 p-5" onClick={toggle}>
        x
      </button>

      <ul className="sidebar-nav text-center leading-relaxed text-xl">
        <li>
          <Link href="/about-us" onClick={toggle}>
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/services" onClick={toggle}>
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggle}>
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
