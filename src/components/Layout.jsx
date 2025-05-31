import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="layout-container">
            <Header />

            <main className="main">
                {children}
            </main>

            <Footer />
        </div>
    )
}