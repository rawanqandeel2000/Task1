const NumberMember = () => {
    return ( 
        <div className="row number-menu">
            <div className="col-sm-4 number-menu-box">
                <i className="material-symbols-outlined">swipe_up_alt</i>
                <h6>Illustrations</h6>
                <p>4 Members</p>
            </div>
            <div className="col-sm-4 number-menu-box">
                <i className="material-symbols-outlined">manage_search</i>
                <h6>UX Research</h6>
                <p>7 members</p>
            </div>
            <div className="col-sm-4 number-menu-box">
                <i className="material-symbols-outlined">database</i>
                <h6 style={{"marginTop": "8px"}}>UI Design</h6>
                <p>13 Members</p>
            </div>
        </div>
    );
}
 
export default NumberMember;