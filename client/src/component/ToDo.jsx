/* eslint-disable react/prop-types */
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { BaseURL } from "../utilis/api";
const ToDo = ({text, id, setUpdateUI}) => {

  const deleteTodo = () =>{
     axios.delete(`${BaseURL}/delete/${id}`)
     .then((res =>{
      console.log(res.data);
      setUpdateUI ((prevState) => !prevState)
     }))
  }
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <span className="text-lg">{text}</span>
      <div className="flex space-x-2">
        
        <ImCross className="text-red-500 cursor-pointer hover:text-red-600 transition duration-200" onClick={deleteTodo} />
      </div>
    </div>
  );
};

export default ToDo;
