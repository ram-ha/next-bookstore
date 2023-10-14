import Link from "next/link";

export default function bestsellers({ bookList }) {
    const { books } = bookList;
    return (
        <div className="bestsllers">
            <h2 className="title">{bookList.display_name} BOOKS</h2>
            <div className="books border">
                {books.map(book => (
                    <div className="book border" key={book.primary_isbn10}>
                        <img src={book.book_image} />
                        <h4>{book.title}</h4>
                        <p>{book.author}</p>
                        <Link href={book.amazon_product_url} legacyBehavior>
                            <a className="buyBtn border button">Buy now &rarr;</a>
                        </Link>
                        <div className="rank">Rank{book.rank}</div>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    .bestsllers {
                        display: flex;
                        flex-direction: column;
                        padding: 50px;
                    }
                    h2 {
                        margin: 0 auto;
                        margin-bottom: 100px;
                    }
                    .books {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        width: 100%;
                        gap: 70px 30px;
                    }
                    @media (max-width: 840px) {
                        h2 {
                        margin-bottom: 50px;
                        }
                        .books {
                        grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    .books img {
                        width: 100%;
                        height: 100%;
                        max-height: 450px;
                        object-fit: cover;
                        margin-top: -10px;
                    }
                    .book {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        position: relative;
                        padding-bottom: 10px;
                        box-shadow: 2px 8px 10px -3px hsla(0, 0%, 0%, 0.3);
                    }
                    .book :not(img:first-of-type) {
                        margin: 0 20px;
                    }
                    .book h4 {
                        font-size: 25px;
                    }
                    .book p {
                        color: #706fd3;
                    }
                    .buyBtn {
                        font-size: 20px;
                        width: fit-content;
                        padding: 10px;
                    }
                    .rank {
                        border: 1px solid white;
                        border-radius: 50%;
                        padding: 5px;
                        color: white;
                        font-size: 20px;
                        position: absolute;
                        background: rgba(30, 30, 30, 0.5);
                        top: -10px;
                        left: -10px;
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