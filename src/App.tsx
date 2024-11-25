import BackgroundPattern from "./components/BackgroundPattern";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./MainContent";

export default function App() {
  return (
    <>
      <BackgroundPattern />

      <div className="mx-auto flex min-h-screen max-w-[1050px] flex-col px-4">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}
