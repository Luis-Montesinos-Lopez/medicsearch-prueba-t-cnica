import {  Result } from "./Drug-Response.interface";

export interface HomeProps {
    handleChange: (e) => void;
    handleSearch: () => void;
    search:string;
    list?: Result[];
    loading?: boolean;
    error?: string;
}