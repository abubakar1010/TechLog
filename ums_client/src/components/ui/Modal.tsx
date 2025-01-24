import React, { useState } from "react";
import { Button, Col, Flex, Modal } from "antd";
import { FormContainer } from "../form/FormContainer";
import { FormMultiSelectSelect } from "./FormMultiSelect";
import { useAssignFacultyMutation } from "../../redux/features/admin/courseManagementApi";
import { useGetAllFacultyQuery } from "../../redux/features/admin/userManagementApi";
import { toast } from "sonner";
import { TError, TResponse } from "../../types";
import { Faculty } from "../../types/faculty";
import { FieldValues } from "react-hook-form";

export const DisplayModal = ({ courseId }: { courseId: string }) => {
	const { data: facultyData } = useGetAllFacultyQuery(undefined);

    console.log(courseId)
    const [assignFaculty]= useAssignFacultyMutation()

	const facultyOptions = facultyData?.data?.map((item) => ({
		label: `${item.name?.firstName} ${item.name?.middleName} ${item.name?.lastName}`,
		value: item._id,
	}));
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const onSubmit = async(data: FieldValues) => {
        console.log(data)
        const assignFacultyData = {
            data,
            courseId
        }
        try {
			const res = (await assignFaculty(assignFacultyData)) as {
				data: TResponse<Faculty[]>;
				error?: TError;
			};
			if (res.error) {
				toast.error(res.error.data.message);
			} else {
				toast.success(res?.data?.message);
			}
			console.log(res);
		} catch (error: unknown) {
			if(error instanceof Error){
                toast.error(error.message);
            }
		}
    };

	return (
		<>
			<Button type="primary" onClick={showModal}>
				Assign Faculty
			</Button>
			<Modal
				title="Basic Modal"
				open={isModalOpen}
				footer={false}
				onCancel={handleCancel}
			>
				<Flex justify="center">
					<Col span={12}>
						<FormContainer onSubmit={onSubmit}>
							<FormMultiSelectSelect
								identifier="faculties"
								placeholder="Select Faculties"
								options={facultyOptions || []}
							/>
                            <Button htmlType="submit">Submit</Button>
						</FormContainer>
					</Col>
				</Flex>
			</Modal>
		</>
	);
};

