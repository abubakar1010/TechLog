import { Button, Dropdown, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TParams } from "../../../types";
import { useChangeSemesterStatusMutation, useGetAllRegisteredSemesterQuery } from "../../../redux/features/admin/courseManagementApi";
import { toast } from "sonner";

type TDataType = {
	key: string;
	status: string;
	maxCredit: number
};

const items = [
	
	{
		key: "1",
		label: "UPCOMING"
	},
	{
		key: "2",
		label: "ONGOING"
	},
	
	{
		key: "3",
		label: "ENDED"
	},
  ]



export const RegisteredSemester = () => {
	const [params, setParams] = useState<TParams[] | undefined>([]);
	const { data: registeredSemester, isFetching } = useGetAllRegisteredSemesterQuery(params);

	const [changeStatus] = useChangeSemesterStatusMutation()

	const onMenuClick = async(e,item) => {
		const value = items[Number(e.key) - 1].label
		try {
			const res = await changeStatus({semesterId: item.key, data: {status: value}})
			console.log(res)
			if(res?.data?.success){
				toast.success(res?.data?.message)
			}else{
				toast.error(res?.error?.data?.message)
			}
		} catch (error) {
			console.log(error)
			
		}
	  };
	  
	
	
	const columns: TableColumnsType<TDataType> = [
		{
			title: "Status",
			dataIndex: "status",
			showSorterTooltip: { target: "full-header" },
			filters: [
				{
					text: "ONGOING",
					value: "ONGOING",
				},
				{
					text: "ENDED",
					value: "ENDED",
				},
				{
					text: "UPCOMING",
					value: "UPCOMING",
				},
			],
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value, record) => record.status.indexOf(value as string) === 0,
			sorter: (a, b) => a.status.length - b.status.length,
			sortDirections: ["descend"],
		},
		{
			title: "MaxCredit",
			dataIndex: "maxCredit",
			showSorterTooltip: { target: "full-header" },
			filters: [
				{
					text: "ONGOING",
					value: "ONGOING",
				},
				{
					text: "ENDED",
					value: "ENDED",
				},
				{
					text: "UPCOMING",
					value: "UPCOMING",
				},
			],
			// specify the condition of filtering result
			// here is that finding the name started with `value`
			// onFilter: (value, record) => record.maxCredit.indexOf(value as string) === 0,
			sorter: (a, b) => a.maxCredit - b.maxCredit,
			sortDirections: ["descend"],
		},
		{
			title: "Action",
			key: "x",
			render: (item) => (
				<Dropdown menu={{ items, onClick: (e) => onMenuClick(e,item) }} placement="bottom">
			<Button>bottom</Button>
		  </Dropdown>
			)
		}
	
	];

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

	const data = registeredSemester?.data?.map(
		({ _id,status, maxCredit }) => ({
			key: _id,
			status,
			maxCredit
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


