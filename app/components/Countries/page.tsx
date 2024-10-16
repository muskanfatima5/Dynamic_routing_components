import Link from "next/link";

function Page() {
  return (
    <div>
      <ul className="text-3xl text-orange-400">
        <li>
          <Link href="/Country/Country_name/Pakistan">Pakistan</Link>
        </li>
        <li>
          <Link href="/Country/Country_name/India">India</Link>
        </li>
        <li>
          <Link href="/Country/Country_name/China">China</Link>
        </li>
        <li>
          <Link href="/Country/Country_name/UAE">UAE</Link>
        </li>
        <li>
          <Link href="/Country/Country_name/America">America</Link>
        </li>
      </ul>
    </div>
  );
}
export default Page;
