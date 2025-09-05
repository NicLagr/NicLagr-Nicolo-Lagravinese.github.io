import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Header from "../components/Header";
import CursorTrail from "../components/CursorTrail";
import Footer from "../components/Footer";
import "../styles/globals.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="min-h-screen bg-bg-primary text-text-primary">
        <CursorTrail />
        <ScrollToTop>
          <Header />
          <AppRoutes />
          <Footer />
        </ScrollToTop>
      </div>
    </Router>
  );
}
