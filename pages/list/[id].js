import Link from "next/link";

export default function bestsellers({ bookList }) {
  const { books } = bookList;
  return (
    <div className="bookList">
      <div className="title">{bookList.display_name} BOOKS</div>
      <div className="booksWrap">
        {books.map((book) => (
          <div className="book" key={book.primary_isbn10}>
            <div className="imgBox">
              <img src={book.book_image} />
            </div>
            <div className="rank">{book.rank}</div>
            <div className="clip" />
            <div className="bookName">{book.title}</div>
            <div className="author">{book.author}</div>
            <div className="buyBtn">
              <Link href={book.buy_links[5].url}>
                <a target="_blank">Buy now &rarr;</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .booksWrap {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 80%;
            gap: 50px 30px;
            padding: 20px;
            margin: 0 auto;
            border-left: 1px solid #449745;
            border-right: 1px solid #449745;
          }
          .book {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            box-shadow: 0 0 1rem -3px hsla(0, 0%, 0%, 0.2),
              inset 0 0 1rem -3px hsla(0, 0%, 0%, 0.1);
            padding-bottom: 10px;
          }
          .imgBox {
            background-color: #065a07;
            width: 100%;
            height: 280px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .imgBox img {
            width: 60%;
            max-height: 200px;
            object-fit: contain;
          }

          .bookName {
            font-size: 20px;
            padding: 8px 5px;
            font-weight: bold;
            text-align: center;
            color: #063f07;
          }
          .author {
            text-align: center;
            padding: 0 5px;
            font-size: 14px;
            padding: 5px 0;
          }
          .buyBtn {
            font-size: 16px;
            border: 1px solid #84b284;
            border-radius: 30px;
            padding: 5px 15px;
            margin: 10px 0 5px;
            cursor: pointer;
            &:hover {
              background-color: #063f07;
              color: #ffffff;
              border: 1px solid #063f07;
            }
          }
          .rank {
            color: tomato;
            font-family: "Heebo", sans-serif;
            font-size: 28px;
            font-weight: bold;
            position: absolute;
            top: 4px;
            right: 7px;
            z-index: 99;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .clip {
            position: absolute;
            top: 0;
            right: 0;
            width: 0;
            height: 0;
            transform: rotate(-180deg);
            border-bottom: 30px solid #ffffff;
            border-top: 30px solid transparent;
            border-left: 40px solid #ffffff;
            border-right: 40px solid transparent;
          }
        `}
      </style>
    </div>
  );
}
export async function getServerSideProps({ params: { id } }) {
  const { results: bookList } = await (
    await fetch(`http://localhost:3000/api/books/${id}`)
  ).json();

  return {
    props: {
      id,
      bookList,
    },
  };
}
