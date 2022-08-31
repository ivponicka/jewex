import Home from "./routes/home.component";
import { Route, Routes } from "react-router-dom";
import './categories.styles.scss'
import Navigation from "./routes/navigation/navigation.component";
import SignIt from "./routes/sign-in/sign-in.component";



const Shop = () => {
  return (
    <div><h1>shop </h1>
      <h1>shop</h1>
      </div>

  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index path='/' element={<Home />} />
         <Route path='shop' element={<Shop />} />
         <Route path='sign-in' element={<SignIt />} />
      </Route>
    </Routes>

  );
};

export default App;