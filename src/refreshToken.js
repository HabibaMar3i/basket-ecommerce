import axios from "axios";

export async function refreshAccessToken() {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      console.log("No refresh token found");
      return null;
    }

    const { data } = await axios.post(
      "https://e-commarce-website-eight.vercel.app/api/v1/auth/refresh",
      { token: refreshToken },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    localStorage.setItem("userToken", data.AccessToken);
    return data.AccessToken;
  } catch (error) {
    console.error("Error refreshing token:", error.response?.data || error);
    return null;
  }
}
