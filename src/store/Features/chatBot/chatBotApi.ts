/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/store/api/baseApi";

const chatBotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getAllChat: builder.query({
      query: (args) => {
        console.log(args)

        return {
          url: `/chatbot-history/get-single-history?userId=${args?.userId}`, 
          method: "GET",
        };
      },
      providesTags: ["chats"],
    }),

    postChat: builder.mutation({
      query: (data) => {
        const params = new URLSearchParams(
          Object.entries(data as Record<string, any>).map(([k, v]) => [k, String(v)])
        ).toString();

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
