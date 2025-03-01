import connectToDB from "@/db-config/db-config";
import { NextResponse } from "next/server";

/* eslint-disable @typescript-eslint/no-explicit-any */

connectToDB();

export const POST = async () => {
	try {
		const response = NextResponse.json(
			{
				message: "You are successfully logged out",
			},
			{
				status: 200,
			}
		);

		response.cookies.set("nex-auth-access-toke", "",{
            httpOnly: true,
            expires: new Date(0)
        });
        return response
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{ status: 500 }
		);
	}
};
