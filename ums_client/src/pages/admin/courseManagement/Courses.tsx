
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TParams } from "../../../types";
import { useGetAllCourseQuery } from "../../../redux/features/admin/courseManagementApi";

type TDataType = {
	key: string;
	title: string;
	prefix: string;
	code: number;
};

const columns: TableColumnsType<TDataType> = [
	{
		title: "Title",
		dataIndex: "title",
		showSorterTooltip: { target: "full-header" }
	},
	{
		title: "prefix",
		dataIndex: "prefix",

	},
	{
		title: "Code",
		dataIndex: "code",
	},
	{
		title: "Actions",
		dataIndex: "X",
		render: () => {
			return <div style={{display: "flex", gap: "12px"}}>
				<Button>Assign Faculty</Button>
				<Button>Update</Button>
				<Button>Delete</Button>
			</div>
		}
	},
];

export const Courses = () => {
	const [params, setParams] = useState<TParams[] | undefined>([]);
	const { data: courseData, isFetching } = useGetAllCourseQuery(params);

	const onChange: TableProps<TDataType>["onChange"] = (
		pagination,
		filters,
		sorter,
		extra
	) => {
		if (extra.action === "filter") {
			const queryParams: TParams[] = [];
			filters.name?.forEach((item) => {
				queryParams.push({ name: "name", value: item });
			});
			filters.startMonth?.forEach((item) => {
				queryParams.push({ name: "startMonth", value: item });
			});
			filters.endMonth?.forEach((item) => {
				queryParams.push({ name: "endMonth", value: item });
			});
			setParams(queryParams);
		}
	};

	const data = courseData?.data?.map(
		({ _id, title, prefix, code }) => ({
			key: _id,
			title,
			code,
			prefix
		})
	);

	return (
		<div>
			<Table<TDataType>
				loading={isFetching}
				columns={columns}
				dataSource={data}
				onChange={onChange}
				showSorterTooltip={{ target: "sorter-icon" }}
			/>
		</div>
	);
};
