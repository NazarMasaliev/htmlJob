import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import RegisterForm from "./components/modal/modalRegist";
import Title from "./components/title/title";



export default function Home() {
  return (
    <div className="w-[100%] flex flex-col items-center" id="modal2">
      {/* header */}
      <section className="w-[100%] flex justify-center">
        <Header />
      </section>
      {/* RegisterForm */}
      <section className="w-[100%] flex justify-center">
      <RegisterForm />
      </section>
      {/* Post */}
      <section className="w-[100%] flex justify-center mt-20">
        <Title />
      </section>
      {/* Footer */}
      <section className="w-[100%] flex justify-center mt-20">
        <Footer />
      </section>
    </div>

  );
}
