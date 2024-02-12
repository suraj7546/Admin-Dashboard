import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className="dashboard" >
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for Data ,users, docs"/>
          <FaRegBell/>
          <img src="" alt="oops.." />
        </div>
        <section className="widgetcontainer">
      <WidgetItem percent={-40} amount={true} value={100000} heading="revenue" color="rgb(0,198,2)"/>
      <WidgetItem percent={99}  value={100000} heading="revenue" color="rgb(0,0,0)"/>
      <WidgetItem percent={-20}  value={100000} heading="revenue" color="rgb(0,0,0)"/>
      <WidgetItem percent={-40}  value={100000} heading="revenue" color="rgb(0,0,0)"/>

      </section>
      </main>
      
    </div>
  )
};
interface WidgetItemProps{
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?:boolean;
}
const WidgetItem=({heading,value,percent,color,amount=false}:WidgetItemProps)=>
  <article className="widget"> 
  <div className="wigetInfo">
    <p>{heading}</p>
    <h4>{amount ? `$${value}`:value}</h4>
    {
      percent>0 ? <span className="green"><HiTrendingUp/>+{percent}%</span>:
      <span className="red"><HiTrendingDown/>{percent}%</span>
    }
  </div>
<div className="widgetCircle " style={{background: `conic-gradient(${color}, ${Math.abs(percent/100*360)}deg,rgb(255,255,255) 0)`}}>
  <span style={{color}}>{percent}%</span>
</div>
  </article>


export default Dashboard
