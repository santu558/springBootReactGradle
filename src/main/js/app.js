'use strict';

// tag::vars[]
const React = require('react'); // <1>
const ReactDOM = require('react-dom'); // <2>
const client = require('./client'); // <3>
import {AgGridReact, AgGridColumn} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// end::vars[]

// tag::app[]
class App extends React.Component { // <1>

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() { // <2>
		client({method: 'GET', path: '/api/stores'}).done(response => {
			this.setState({stores: response.entity._embedded.stores});
//			 this.gridOptions.columnDefs = [
//                        { headerName: 'storeNumber', field: 'storeNumber' },
//                        { headerName: 'address', field: 'address', type: 'rightAligned' },
//                        { headerName: 'lastRunDate', field: 'lastRunDate', type: 'numericColumn' }
//                      ];
//
////            this.gridOptions.rowData = response.entity._embedded.stores;
//
//            this.gridOptions.rowData = [
//                        { storeNumber: 'Toyota', model: 'address', lastRunDate: 35000 },
//                        { storeNumber: 'Ford', model: 'address', lastRunDate: 32000 },
//                        { storeNumber: 'Porsche', model: 'address', lastRunDate: 72000 }
//                      ];
		});
	}
//
//     gridOptions = {
//        columnDefs: [
//            { headerName: 'storeNumber', field: 'storeNumber' },
//            { headerName: 'address', field: 'address', type: 'rightAligned' },
//            { headerName: 'lastRunDate', field: 'lastRunDate', type: 'numericColumn' },
//        ],
//        rowData : this.state.stores
//        // other grid options ...
//    }


	render() { // <3>
		return (
			//<EmployeeList employees={this.state.employees}/>
			 <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                 <AgGridReact
                    rowData={ this.state.stores }
                    rowSelection="multiple">
                    <AgGridColumn field="storeNumber" sortable={ true } filter={ true } checkboxSelection={ true }></AgGridColumn>
                    <AgGridColumn field="address" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="lastRunDate" sortable={ true } filter={ true }></AgGridColumn>
                </AgGridReact>
                </div>
//            <AgGridReact gridOptions={this.gridOptions} />
		)
	}
}
// end::app[]

// tag::employee-list[]
class EmployeeList extends React.Component{
	render() {
		const employees = this.props.employees.map(employee =>
			<Employee key={employee._links.self.href} employee={employee}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Namekkk</th>
						<th>Last Namekkkk</th>
						<th>Descriptionkkk</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
// end::employee-list[]

// tag::employee[]
class Employee extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.employee.firstName}</td>
				<td>{this.props.employee.lastName}</td>
				<td>{this.props.employee.description}</td>
			</tr>
		)
	}
}
// end::employee[]

// tag::render[]
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
// end::render[]
