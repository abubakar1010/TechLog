
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TParams } from "../../../types";
import { useGetAllCourseQuery } from "../../../redux/features/admin/courseManagementApi";
import { DisplayModal } from "../../../components/ui/Modal";

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
		key: "title",
		showSorterTooltip: { target: "full-header" }
	},
	{
		title: "prefix",
		key: "prefix",
		dataIndex: "prefix",

	},
	{
		title: "Code",
		key: "code",
		dataIndex: "code",
	},
	{
		title: "Actions",
		key: "X",
		render: (item) => {
			console.log(item)
			return <div style={{display: "flex", gap: "12px"}}>
				<DisplayModal courseId={item.key} />
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
