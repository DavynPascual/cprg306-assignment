import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userId) => {
    const whatever = await getDocs(collection(db, "items"))
    return whatever
  }
  
  const addItem = () => {
  
  }
  
  export default getItems;