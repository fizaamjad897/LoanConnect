"use server"
import Borrower from "@/database/borrower.model";
import { connectToDatabase } from "../mongoose";

export const getAllBorrowers = async () => {
    try {
        await connectToDatabase();
        const borrowers = await Borrower.find({});
        return borrowers;
    } catch (error:any) {
        throw new Error(`Error fetching borrowers: ${error.message}`);
    }
};