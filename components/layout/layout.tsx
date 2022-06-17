import { ChildNodeProps } from 'types/child-node-props';
import Footer from './footer';
import NavBar from './nav-bar';

const Layout = ({children}: ChildNodeProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout;