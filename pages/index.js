import Link from "next/link";

export default function IndexPage({ books }) {
  return (
    <div className="container">
      <h2 className="title">THE NEW YORK TIMES BEST SELLER EXPLORER</h2>
      <div className="list">
        {books.map((book) => (
          <div className="listName border button">
            <Link href={`/list/${book.list_name}`} key={book.list_name_encoded}>
              <span>{book.display_name} &rarr;</span>
            </Link>
          </div>
        ))}
        {console.log(books.filter((book) => book.updated === "WEEKLY"))}
      </div>
      <style jsx>{`
        .list {
          padding: 0 15px;
        }
        .listName {
          display: inline-block;
          cursor: pointer;
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

  return {
    props: { books },
  };
}
