import axios from 'axios';

export const httpClient = {
   get: async (url: string) => {
      console.log(url);
      const { data } = await axios.get(url);
      return data;
   },

   post: async (url: string, body: any) => {
      throw new Error('Not implemented');
   },

   put: async (url: string, body: any) => {
      throw new Error('Not implemented');
   },

   delete: async (url: string) => {
      throw new Error('Not implemented');
   },
};
