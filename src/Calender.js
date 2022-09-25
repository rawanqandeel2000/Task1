const Calender = () => {
    return ( 
        <div className="calender-table">
            <div className="calender-title">
                <h5>Calender</h5>
                <p>March</p>
            </div>
		    <div className="table-days">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Mon</th>
                        <th scope="col">Tue</th>
                        <th className='calender-selected calender-days-selected' scope="col">Wed</th>
                        <th scope="col">Thu</th>
                        <th scope="col">Fri</th>
                        <th scope="col">Sat</th>
                        <th scope="col">Sun</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>07</td>
                        <td>08</td>
                        <td className='calender-selected calender-number-selected'>09</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        </tr>
                    </tbody>
				</table>
			</div>
    	</div>
     );
}
 
export default Calender;