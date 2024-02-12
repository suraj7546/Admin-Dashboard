import { Link} from "react-router-dom";
import {RiDashboardFill, RiShoppingBag3Fill} from 'react-icons/ri'
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

const AdminSidebar = () => {
  
  return (
    <aside>
        <h2>Logo</h2>
        <div>
          <h5>DashBoard</h5>
          <ul>
            <li>
            <Link to={"/admin/dashboard"} ><RiDashboardFill/>DashBoard</Link>
            </li>
            <li>
            <Link to={"/admin/product"} ><RiShoppingBag3Fill/>Product</Link>
            </li>
            <li>
            <Link to={"/admin/costomer"} ><IoIosPeople/>Costomer</Link>
            </li>
            <li>
            <Link to={"/admin/transaction"} ><AiFillFileText/>Transaction</Link>
            </li>
         
           
          </ul>
        </div>
    </aside>
  )
}
// interface LiProps{
//   url:string;
//   text:string;
//   location:Location;
//   Icon:IconType;
// }
// const Li=({url,location,Icon,text}:LiProps)=><li>
// <Link to={url}>
//   <Icon/>
//   {location/}
//   {text}</Link>
  
// </li>
export default AdminSidebar
