import { BsSearch } from "react-icons/bs"
import AdminSidebar from "../components/AdminSidebar"
import { FaRegBell } from "react-icons/fa"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data  from "../assets/data.json";
import { BarChart } from "../components/Charts";
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
      <section className="graph-container">
        <div className="revenue-chart">
          <h2>Revenue & Transaction</h2>
          {/* graph */}
          <BarChart data_1={[300,144,433,655,237,755]} data_2={[432,543,123,563,465,675]} title_1="Revenue" title_2="Transaction"
           bgColor_1="rgb(0,115,255)" bgColor_2="rgb(53,162,235,0.8)"/>
        </div>
        <div className="dashboard-categories"> <h2>Inventory</h2>
        <div>
        {
          data.categories.map((i)=>(
            <CategoryItem 
            key={i.heading}
            heading={i.heading} value={i.value} 
            color={`hsl(${i.value*7},${i.value}%,50%)`}
            />
          ))
        }

        </div>
        
        </div>

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


  interface CategoryItemProps{
    color:string;
    value:number;
    heading:string;
  }
const CategoryItem=({color,value,heading}:CategoryItemProps)=>(
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{backgroundColor:`${color}`,
      width:`${value}%`}}>

      </div>
    </div>
    <span>{value}%</span>
  </div>
  
)

export default Dashboard
