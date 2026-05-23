import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4">{children}</main>
      <Footer />
    </>
  );
}