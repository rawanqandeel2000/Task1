import { useState } from 'react';
import MyImage from './images/img.jpeg';



const TeamMembers = (props) => {
    const [members, setMembers] = useState([
        {"memberName":"Sina Ahmadi", "jobTitle":"Frontend Developer", "id":1,},
        {"memberName":"Marjan Ghazi", "jobTitle":"Illustrator and Sketch Artist", "id":2 },
        {"memberName":"Masoud Javadi", "jobTitle":"UX Reasercher", "id":3},
        {"memberName":"Ashkan Gomrokian", "jobTitle":"3D Artist", "id":4}
    ])
    return ( 
            <div className="team-members">
                <div className="row">
                    <div className="col-sm-6">
                        <h4>Team Members</h4>
                    </div>
                    <div className="col-sm-6 icon-details">
                        <i className="fa fa-ellipsis-v style"></i>
                    </div>
                </div>
                <div className='teams'>  
                        {members.map((member) => (
                            <div className="row member-des" key={member.id}>
                                <div className="col-sm-2">
                                    <img src={MyImage}  width="50px" height="50px"/>
                                </div>
                                <div className="col-sm-10 member-details">
                                    <h6>{member.memberName}</h6>
                                    <p>{member.jobTitle}</p>
                                </div>
                            </div>

                        ))}
                </div> 
            </div>
    
     );
}
 
export default TeamMembers;