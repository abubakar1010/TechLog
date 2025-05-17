import { Button, Table } from "antd";
import type { PaginationProps, TableColumnsType, TableProps } from "antd";
import { useGetAllStudentQuery } from "../../../../redux/features/admin/userManagementApi";
import { TStudent } from "../../../../types/student.type";
import { Paginate } from "../../../../components/ui/pagination";
import { useState } from "react";
import { Link } from "react-router-dom";

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

export const Faculties = () => {
	const [current, setCurrent] = useState(1);
	const { data: res, isFetching } = useGetAllStudentQuery([
		{ name: "limit", value: 1 },
		{ name: "page", value: current },
	]);
	console.log(res);

	const metaData = res?.meta;

	const tableData = res?.data?.map((item: TStudent) => ({
		key: item._id,
		name: item.name.firstName,
		age: 40,
		address: "Anatolia",
		email: item.email,
	}));

	const columns: TableColumnsType<DataType> = [
		{
			title: "Name",
			dataIndex: "name",
			showSorterTooltip: { target: "full-header" },
			filters: res?.data?.map((item: TStudent) => ({
				text: item.name.firstName,
				value: item.name.firstName,
			})),
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value, record) => record.name.indexOf(value as string) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ["descend"],
		},
		{
			title: "Email",
			dataIndex: "email",
			showSorterTooltip: { target: "full-header" },
			filters: res?.data.map((item: TStudent) => ({
				text: item.email,
				value: item.email,
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
			onFilter: (value, record) =>
				record.address.indexOf(value as string) === 0,
		},
		{
			title: "Actions",
			key: "x",
			render: (item) => (
				<div >
					<Link to={`/admin/student-update/${item.key}`}>
					<Button >Update</Button>
					</Link>
					<Button style={{margin: " 0 12px"}}>Delete</Button>
					<Button>Block</Button>
				</div>
			)
		},
	];

	const paginationController: PaginationProps["onChange"] = (page) => {
		console.log(page);
		setCurrent(page);
	};

	return (
		<div>
			<h1 style={{ textAlign: "center", margin: "5px 0 30px 0" }}>
				This is the AcademicFaculty page
			</h1>
			<Table<DataType>
				columns={columns}
				loading={isFetching}
				dataSource={tableData}
				onChange={onChange}
				pagination={false}
				showSorterTooltip={{ target: "sorter-icon" }}
			/>
			<div style={{margin: "20px 0"}}>
				<Paginate
					pageSize={metaData?.limit}
					total={metaData?.total}
					onChange={paginationController}
					current={current}
				/>
			</div>
		</div>
	);
};
