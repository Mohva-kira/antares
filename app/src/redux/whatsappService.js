import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
    data: null,
};

export const whatsappSlice = createSlice({
    name: "whatsapp",
    initialState,
    reducers: {
        setApplication: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.data = state.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setApplication } = whatsappSlice.actions;
export default whatsappSlice.reducer;

const APIURL = import.meta.env.VITE_WHATSAPP_API_URL 
const APIKEY = import.meta.env.VITE_WHATSAPP_API_KEY;

if(!APIURL || !APIKEY) {
    console.error("Environment variables WHATSAPP_API_URL and WHATSAPP_API_KEY must be set.");
    throw new Error("Missing required environment variables for WhatsApp API.");
}
export const whatsappApi = createApi({
    reducerPath: "whatsappApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://graph.facebook.com/v22.0/587745037765750",
        prepareHeaders: (headers, { getState }) => {
            const token = APIKEY;
            if (token) {
                headers.set("authorization", `Bearer ${token}`);
            }
            headers.set("Content-type", "application/json");
            headers.set("Accept", "application/json");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        sendMessage: builder.mutation({
            query: (data) => ({
                url: "/messages",
                method: "POST",
                body: {
                    messaging_product: "whatsapp",
                    to: data.to,
                    type: "text",
                    text: {
                        body: data.body,
                    },
                },
            }),
        }),
       
    }),
});

// Exports des hooks générés automatiquement par RTK Query
export const {
    useSendMessageMutation,
  
} = whatsappApi;