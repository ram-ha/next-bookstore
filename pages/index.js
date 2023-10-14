import Link from "next/link";
import { useRouter } from "next/router";

export default function IndexPage({ books }) {
  const router = useRouter();
  const onClick = (list_name, list_name_encoded) => {
    router.push(`/list/${list_name}/${list_name_encoded}`)
  }
  return (
    <div className="container">
      <h2 className="title">THE NEW YORK TIMES BEST SELLER EXPLORER</h2>
      <div className="list">
        {books.map(book => (
          <div className="listName border button"
            onClick={() => onClick(book.list_name, book.list_name_encoded)}
            key={book.list_name_encoded}>
            <Link href={`/list/${book.list_name}`} legacyBehavior>
              {book.display_name} &rarr;
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .list {
          padding: 0 15px;
        }
        .listName {
          display: inline-block;
          padding: 10px 20px;
          margin: 10px 15px 10px 0;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results: books } = await (
    await fetch(`http://localhost:3000/api/books`)
  ).json();
  console.log(books)

  return {
    props: { books },
  };
}