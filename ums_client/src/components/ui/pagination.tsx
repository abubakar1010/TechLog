import type { PaginationProps } from "antd";
import { Pagination } from "antd";

export const Paginate = ({
	onChange,
	current,
	total,
    pageSize
}: {
	onChange: PaginationProps["onChange"];
	current: number;
	total: number | undefined;
	pageSize: number | undefined;
}) => {
	return (
		<Pagination
			pageSize={pageSize}
			current={current}
			onChange={onChange}
			total={total}
		/>
	);
};
