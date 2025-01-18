import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagementApi";
import { TAcademicFaculty } from "../../../types/academicFaculty.type";

interface DataType {
	key: React.Key;
	name: string;
	age: number;
	address: string;
}


const onChange: TableProps<DataType>["onChange"] = (
	pagination,
	filters,
	sorter,
	extra
) => {
	console.log("params", pagination, filters, sorter, extra);
};

export const AcademicFaculty = () => {

	const {data: res, isFetching} = useGetAllAcademicFacultyQuery(undefined)
	console.log(res)

	const tableData =  res?.data?.map( (item: TAcademicFaculty) => ({
		key: item._id,
		name: item.name,
		age: 40,
		address: "Anatolia"
	}))

	const columns: TableColumnsType<DataType> = [
		{
			title: "Name",
			dataIndex: "name",
			showSorterTooltip: { target: "full-header" },
			filters: res?.data.map( (item: TAcademicFaculty) => ({
				text: item.name,
				value: item.name,
			})),
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value, record) => record.name.indexOf(value as string) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ["descend"],
		},
		{
			title: "Age",
			dataIndex: "age",
			defaultSortOrder: "descend",
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: "Address",
			dataIndex: "address",
			filters: [
				{
					text: "London",
					value: "London",
				},
				{
					text: "New York",
					value: "New York",
				},
			],
			onFilter: (value, record) => record.address.indexOf(value as string) === 0,
		},
	];

	return (
		<div>
			<h1 style={{textAlign: "center", margin: "5px 0 30px 0"}}>This is the AcademicFaculty page</h1>
			<Table<DataType>
				columns={columns}
				loading={isFetching}
				dataSource={tableData}
				onChange={onChange}
				showSorterTooltip={{ target: "sorter-icon" }}
			/>
		</div>
	);
};
