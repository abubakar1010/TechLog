import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
/* eslint-disable @typescript-eslint/no-explicit-any */

export const getDataFromJWT = async (request: NextRequest) => {
	const token = request.cookies.get("nex-auth-access-toke")?.value || "";
	const decodedData: any =  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
	return decodedData.id;
};
