import MyImg from './images/sound.jpg';
import MyImage from './images/img.jpeg';

const TeamComments= () => {
    return ( 
     <div className="teams-comments">
		<img src={MyImg} width="300px"  alt="" />
            
            <div className="comments-social">
                <img src={MyImage} width="40px" height="40px" alt="" />
                <span className='ml-5'>Marjan Ghazi</span>
            </div>
            <div className='vl'></div>
            <div className="comments-box">
                <p>This is very cute 😍😍 !!! I think for our second shot we can try to target a different style .How does it sound for you ?</p>
                <div className="likes-reply">
                    <i className="fa fa-heart"> 5</i>
                    <a href="#">Reply</a>
                </div>
                <div className="member-comment">
                    <img src={MyImage} width="40px" height="40px" alt="" />
                    <span className='ml-5' style={{color:'#000'}}><b>Saeed Mohamadpour</b></span>
                    <p>Yes, that sounds good ! Ican think about this tommorow When do we plan to start the new style? <a href="" style={{color:"#836DE4"}}>@mohammad</a></p>
                    <div className="likes">
                    <a href='#'><i className="fa fa-heart"> 5</i></a>
                    </div>
                </div>
                
        </div>
        
    </div>
	
     );
}
 
export default TeamComments;