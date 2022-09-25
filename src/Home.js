import Calender from "./Calender";
import Chart from "./Chart";
import Navbar from "./Navbar";
import NumberMember from "./NumberMembers";
import TeamComments from "./TeamComments";
import TeamMembers from "./TeamMembers"

const Home = () => {
    return ( 
        <div className="all-page">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <Navbar/>
                    </div>
                    <div className="col-sm-5">
                        <TeamMembers/>
                        <Calender/>
                        <Chart/>
                    </div>
                    <div className="col-sm-5">
                        <TeamComments/>
                        <NumberMember/>
                    </div>
                </div>
            </div>
        </div>      
     );
}
 
export default Home;