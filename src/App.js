import { Routes, Route } from "react-router";
import {useEffect} from 'react'
import Home from "./components/routes/home/home";
import Women from "./components/routes/home/women";
import Men from "./components/routes/home/men";
import Kids from "./components/routes/home/kids";
import Family from "./components/routes/home/family";
import Accessories from "./components/routes/home/accessories";
import NavMenu from "./components/nav-menu/navMenu";
import SingIn from "./components/routes/sing-in/singIn";
import SingUp from "./components/routes/sing-up/singUp";
import Shop from "./components/routes/shop/shop";
import { useDispatch } from "react-redux";
import {
  onAuthStateChangedListener,
  createUserDocumentAuth,
  getCollectionData
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import {setCategoriesMapAction} from "./store/categories/category.action"



const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, []);
  useEffect(() => {
    const getCatMap = async ()=>{
     const categoryMap = await getCollectionData()
     dispatch( setCategoriesMapAction(categoryMap))
     console.log(categoryMap, 'categorias');
    }
   getCatMap()
  }, [])
 
  return (
 
    <Routes>
      <Route path="/" element={<NavMenu />}>
        <Route index element={<Home />} />
        <Route path="women" element={<Women />} />
        <Route path="men" element={<Men />} />
        <Route path="kids" element={<Kids />} />
        <Route path="family" element={<Family />} />
        <Route path="sing-in" element={<SingIn />} />
        <Route path="sing-up" element={<SingUp />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
   
  );
};

export default App;
