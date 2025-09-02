import { baseApi } from "@/store/api/baseApi";

const chatBotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllbooks: builder.query({
      query: (args?) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/books/get-all-books",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Books"],
    }),
    
    createBook: builder.mutation({
      query: (data) => ({
        url: "/books/create-new-book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

   
  }),
});

export const {
  useGetAllbooksQuery,
  useCreateBookMutation
} = chatBotApi;