import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

function DefaultPage() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </ Container>
            <Footer />
        </main>
    )
}

export default DefaultPage;