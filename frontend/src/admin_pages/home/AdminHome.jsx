import Chart from "../../admin_components/chart/Chart";
import FeaturedInfo from "../../admin_components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../admin_components/widgetSm/WidgetSm";
import WidgetLg from "../../admin_components/widgetLg/WidgetLg";
import Topbar from "../../admin_components/topbar/Topbar";
import Sidebar from "../../admin_components/sidebar/Sidebar";
export default function AdminHome() {
  return (
    <div className="home">
      <div className="left">
        <Sidebar/>
      </div>
      <div className="right">
      <Topbar/>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      </div>
     
    </div>
  );
}
