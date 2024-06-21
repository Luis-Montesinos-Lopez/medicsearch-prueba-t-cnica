import { ChangeEvent } from "react";
import {  Result } from "./Drug-Response.interface";

export interface HomeProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    search:string;
    list?: Result[];
    loading?: boolean;
    error?: string;
}