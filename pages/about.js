export default function About() {
    return (
        <div className="wrap">
            <h2>ABOUT US</h2>
            <p>
                Welcome to the official explorer for The New York Times Best Seller list explorer.
                <br />
                We hope you enjoy your stay!
            </p>
            <style jsx>{`
                .wrap {
                    max-width: 650px;
                    margin: 0 auto;
                    padding: 20px;
                    border-left: 1px solid #449745;
                    border-right: 1px solid #449745;
                    border-bottom: 1px solid #449745;
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
        </div>
    );
}
