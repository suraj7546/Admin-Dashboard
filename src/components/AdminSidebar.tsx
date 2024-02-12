import { Link,Location, useLocation} from "react-router-dom";
import {RiDashboardFill, RiShoppingBag3Fill} from 'react-icons/ri'
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
  import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
const AdminSidebar = () => {
  const location=useLocation();
  return (
    <aside>
        <h2>Logo</h2>
        <div>
          <h5>DashBoard</h5>
          <ul>
            <Li url="/admin/dashboard" Icon={RiDashboardFill} text="DashBoard" location={location}/> 
            <Li url="/admin/product" Icon={RiShoppingBag3Fill} text="Product" location={location}/>           
            <Li url="/admin/customer" Icon={IoIosPeople} text="Customer" location={location}/> 
            <Li url="/admin/transaction" Icon={AiFillFileText} text="Transaction" location={location}/>
          </ul>
        </div>
        <div>
          <h5>Charts</h5>
          <ul>
            <Li url="/admin/chart/bar" Icon={FaChartBar} text="Bar" location={location}/> 
            <Li url="/admin/chart/pie" Icon={FaChartPie} text="Pie" location={location}/>           
            <Li url="/admin/chart/line" Icon={FaChartLine} text="Line" location={location}/> 
          </ul>
        </div>
    </aside>
  )
}

interface LiProps{
  url:string;
  text:string;
  location:Location;
  Icon:IconType;
}
const Li=({url,location,Icon,text}:LiProps)=>
<li
style={{backgroundColor:location.pathname.includes(url)?"rgba(0,115,225,0.1)":"white"}}
>
<Link to={url}>
  <Icon/>
  
  {text}
  
  </Link>
 
  
</li>
 console.log(location);
export default AdminSidebar
