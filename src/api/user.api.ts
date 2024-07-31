import axiosInstance from "../config/axios.config";
import {BackendRes, User } from "../types/backend"

export const callFetchUsers = async (query: string) => {
    try {
      const response = await axiosInstance.get(query);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error; // Rethrow error to be handled by caller
    }
}