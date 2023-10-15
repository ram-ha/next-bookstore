import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <div className="linkWrap">
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>HOME</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>ABOUT</a>
        </Link>
      </div>
      <style jsx>
        {`
          nav {
            border-bottom: 1px solid #449745;
            height: 60px;
          }
          .linkWrap {
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 650px;
          }
          nav a {
            font-weight: 600;
            font-size: 18px;
            padding: 19px 10px;
            border-left: 1px solid #449745;
            &:nth-child(2) {
              border-right: 1px solid #449745;
            }
          }
          .active {
            color: tomato;
          }
        `}
      </style>
    </nav>
  );
}
