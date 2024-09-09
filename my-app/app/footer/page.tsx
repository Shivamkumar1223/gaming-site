import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function FooterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center p-4 mt-24 mb-16">
        <h1 className="text-2xl font-bold mb-4 text-center">Footer Page</h1>
        <p className="text-lg text-center">This is the footer page content.</p>
      </main>
      <Footer />
    </div>
  );
}