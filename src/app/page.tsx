import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Title from "./components/title/title";



export default function Home() {
  return (
    <div className="w-[100%] flex flex-col items-center">
      {/* header */}
      <section className="w-[100%] flex justify-center">
        <Header />
      </section>
      {/* Post */}
      <section className="w-[100%] flex justify-center mt-20">
        <Title/>
      </section>
     
      {/* Footer */}
      <section className="w-[100%] flex justify-center mt-20">
        <Footer/>
      </section>
    </div>

  );
}
