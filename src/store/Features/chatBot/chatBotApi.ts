/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/store/api/baseApi";

const chatBotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllChat: builder.query({
      query: (args?) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/chatbot-history/get-all",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["chats"],
    }),

    postChat: builder.mutation({
      query: (data) => {
        console.log(data)
        const params = new URLSearchParams(data).toString();
        console.log(params)

        return {
          url: `/chatting/chat?${params}`, // send data as query string
          method: "POST",
        };
      },
      invalidatesTags: ["chats"],
    }),
  }),
});

export const { useGetAllChatQuery, usePostChatMutation } = chatBotApi;
