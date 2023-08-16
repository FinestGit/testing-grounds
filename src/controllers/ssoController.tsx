import axios from "axios";
import { from, map, retry, tap } from "rxjs";

const getAccessToken = async (code: string) => {
  const response = axios.get(
    `http://localhost:4000/oauth/callback?code=${code}`
  );

  return from(response).pipe(
    retry(3),
    tap((response) => {
      const { error, error_description } = response.data.data;
      if (error) {
        throw new Error(error_description);
      }
    }),
    map((response) => response.data)
  );
};

export { getAccessToken };
