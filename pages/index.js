import Link from 'next/link';

export default function IndexPage({ books }) {
    const weekly = books.filter((book) => book.updated === 'WEEKLY');
    const monthly = books.filter((book) => book.updated === 'MONTHLY');

    return (
        <div className="container">
            <div className="title">THE NEW YORK TIMES BEST SELLER EXPLORER</div>
            <div className="list">
                <span className="listName">Weekly</span>
                {weekly.map((book) => (
                    <div className="item">
                        <Link href={`/list/${book.list_name}`} key={book.list_name_encoded}>
                            <span>{book.display_name} &rarr;</span>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="list">
                <span className="listName">Monthly</span>
                {monthly.map((book) => (
                    <div className="item">
                        <Link href={`/list/${book.list_name}`} key={book.list_name_encoded}>
                            <span>{book.display_name} &rarr;</span>
                        </Link>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .list {
                    max-width: 650px;
                    margin: 0 auto;
                    padding: 20px;
                    border-left: 1px solid #449745;
                    border-right: 1px solid #449745;
                    display: flex;
                    flex-direction: column;
                }
                .listName {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 8px 0 8px 5px;
                    font-size: 22px;
                    font-weight: bold;
                    &:after {
                        content: '';
                        width: 550px;
                        height: 10px;
                        background-color: #449745;
                        display: block;
                        margin-left: 20px;
                    }
                }
                .item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border: 1px solid #449745;
                    border-radius: 2px;
                    margin: 4px 0;
                    cursor: pointer;
                    width: 100%;

                    &:after {
                        content: '';
                        width: 80px;
                        height: 50px;
                        background-color: #84b284;
                        display: block;
                        margin-left: 20px;
                    }
                    &:hover {
                        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
                        &:after {
                            background-color: #063f07;
                        }
                    }
                }
                .item span {
                    padding: 10px 15px;
                    width: 100%;
                    font-weight: 500;
                    color: #065a07;
                }
            `}</style>
        </div>
    );
}

export async function getServerSideProps() {
    const { results: books } = await (await fetch(`http://localhost:3000/api/books`)).json();

    return {
        props: { books },
    };
}
