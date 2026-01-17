import { mockSubjects } from "@/constants/mock-data";
import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },
  getApiUrl: () => "",

  getOne: async () => {
    throw new Error("Not implemented");
  },
  create: async () => {
    throw new Error("Not implemented");
  },
  update: async () => {
    throw new Error("Not implemented");
  },
  deleteOne: async () => {
    throw new Error("Not implemented");
  },
};
