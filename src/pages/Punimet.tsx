import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Punimet = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Punimet;
