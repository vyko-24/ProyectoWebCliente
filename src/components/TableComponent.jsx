import React from 'react'
import DataTable from 'react-data-table-component'
import { Spinner } from 'flowbite-react'

const Loading = () => {
    return <div className='flex flex-wrap gap-2'>
        <div className='text-center'>
            <Spinner size={'xl'} />
        </div>
    </div>
}

const options = {
    rowsPerPageText:"Registros por página",
    rangeSeparatorText:"de",
};

const TableComponent = ({ columns, data, onSort, progress }) => {
    return (
        <DataTable className='w-full text-left text-sm text-gray-500'
            columns={columns}
            data={data}
            onSort={onSort}
            pagination
            noDataComponent={"Sin Registros jasjjsjsjsjsjs"}
            paginationComponentOptions={options}
            progressPending={progress}
            progressComponent={<Loading />} />
    )
}

export default TableComponent