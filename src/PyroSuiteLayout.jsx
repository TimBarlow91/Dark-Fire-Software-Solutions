import PyroSuiteNavbar from './PyroSuiteNavbar';
import PyroSuiteFooter from './PyroSuiteFooter';

export default function PyroSuiteLayout({ children }) {
  return (
    <>
      <PyroSuiteNavbar />
      {/* The main/section tag inside your pages handles the pt-24 padding */}
      {children}
      <PyroSuiteFooter />
    </>
  );
}