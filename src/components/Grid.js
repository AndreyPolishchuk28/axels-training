import React, {useEffect, useState} from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const Grid = () => {
    const [power, setPower] = useState({
        columnDefs: [{
            headerName: "Athlete", field: "athlete",
        }, {
            headerName: "Sport", field: "sport"
        }, {
            headerName: "Country", field: "country"
        }, {
            headerName: "Year", field: "year"
        }, {
            headerName: "Age", field: "age"
        }],
        rowData: []
    });
    const [defaultColDef] = useState({
        width: 200,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
        sortable: true
    });
    const [gridApi, setGridApi] = useState();
    const [gridColumnApi, setGridColumnApi] = useState();

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json')
            .then(result => result.json())
            .then(rowData => setPower(prevState => {
                return {
                    ...prevState, rowData: rowData
                }
            }))
    };

    const onCountryFirst = () => {
        gridColumnApi.moveColumn('country', 0);
    };

    const onSwapFirstTwo = () => {
        gridColumnApi.moveColumnByIndex(0, 1);
    };

    return (
        <div
            className="ag-theme-alpine"
            style={{
                height: '500px',
                width: '1000px' }}
        >
            <button onClick={onCountryFirst}>Country</button>
            <button onClick={onSwapFirstTwo}>Swap First Two</button>
            <AgGridReact
                columnDefs={power.columnDefs}
                rowData={power.rowData}
                defaultColDef={defaultColDef}
                animateRows={true}
                onGridReady={onGridReady}
            >
            </AgGridReact>
        </div>
    );
};
