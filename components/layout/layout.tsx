import Footer from "./footer"
import NavBar from "./nav-bar"
import styles from "styles/layout/layout.module.scss"
import Image from 'next/image'
import { useRouter } from "next/router"
import Head from "next/head"


interface LayoutProps {
    title?: string;
    removeNavBar?: boolean;
    removeFooter?: boolean;
    removeKakao?: boolean;
    children: React.ReactNode;
 }

const Layout = ({title, removeNavBar, removeFooter, removeKakao, children}: LayoutProps) => {
  return <>
    {children}
  </>
}
export default Layout;
