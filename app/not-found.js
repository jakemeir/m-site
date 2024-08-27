import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div>there are 4 pages for this whole site why are you here</div>
      <p>here is a button that would take you to the home page</p>
      <Link href={"/"}>BUTTON</Link>
    </>
  );
}
