import connectToDB from "@/db-config/db-config";
import { getDataFromJWT } from "@/helper/get-data-from-jwt";
import User from "@/models/user-model";
import { NextRequest, NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */

connectToDB();

export const POST = async (request: NextRequest) => {
	try {
		const id = await getDataFromJWT(request);

		if (!id) {
			return NextResponse.json(
				{
					message: "You are not authorized",
				},
				{
					status: 403,
				}
			);
		}

        console.log("id", id)

		const user = await User.findById(id).select("-password");

		if (!user) {
			NextResponse.json(
				{
					message: "Your session expired",
				},
				{
					status: 403,
				}
			);
		}

		return NextResponse.json(
			{
				message: "User Data Successfully Retrieved",
                data: user
			},
			{
				status: 200,
			}
		);
	} catch (error: any) {
        console.log(error)
		return NextResponse.json(
			{
				message: error.message,
			},
			{ status: 500 }
		);
	}
};
