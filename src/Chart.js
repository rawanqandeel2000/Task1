const Chart = () => {
    return ( 
    <div className="chart-page">
		<div className="details">
			<a href="#"><i className="fa fa-ellipsis-v style"></i></a>
		</div>
	    <div className="row pt-20">
		    <div className="col-sm-6 chart-det">
			    <a href=""><i className="material-symbols-outlined">priority</i></a><br />
				<h6>3,859</h6>
				<p>Annual tasks done</p>
			</div>
			<div className="col-sm-6 chart-line ">
				<div className="icon-chart">
					<i className="material-icons">show_chart</i>
				</div>
			</div>
		</div>
	</div>
	
     );
}
 
export default Chart;
