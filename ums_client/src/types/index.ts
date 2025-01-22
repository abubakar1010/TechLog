import { BaseQueryApi } from "@reduxjs/toolkit/query";
import React from "react";

export type TError = {
    data: {
        message: string;
        stack: string;
        success: boolean;
    }
    status: number
}

type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number
}

export type TResponse<T> = {
    data: T;
    error?: TError;
    meta?: TMeta;
    success: boolean;
    message: string;
}

export type TReduxResponse<T> = TResponse<T> & BaseQueryApi;

export type TParams = {
    name: string;
    value: boolean | React.Key;
}

export type TResponseDefault = {
	_id: string;
    createdAt: string;
	updatedAt: string;
}