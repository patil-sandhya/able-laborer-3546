import Home from "../Pages/Home";
import { Route,Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from '@chakra-ui/react'
import SignUpForm from "../Pages/SignUp";
import SingleProduct from "../Pages/SingleProduct";
import Wine from "../Pages/wine";
function AllRoutes() {
  // import the chakra UI components from the chakra UI library , and remove the following.
  //const Container = ()=><div></div>;

  return (
    <Container maxW="container.xl">{/* add all the routes here */}
    <Routes>
    <Route element={<Home />} path="/"></Route>
    <Route element={<SignUpForm />} path="/sign-up"></Route>
    <Route element={<Wine />} path="/wine"></Route>
    <Route element={<SingleProduct />} path="/one-product/:id"></Route>
    </Routes>
    </Container>
  );
}

export default AllRoutes;
