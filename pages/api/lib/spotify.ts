import axios from "axios";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const API_ENDPOINT = `https://api.spotify.com/v1`;
const TOP_TRACKS_ENDPOINT = API_ENDPOINT + "/me/top/tracks";
const CURRENTLY_PLAYING_ENDPOINT =
  API_ENDPOINT + "/me/player/currently-playing";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async (): Promise<{ access_token: string }> => {
  const auth_string = Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64"
  );

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth_string}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    } as any),
  });
  return response.json();
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  const { data } = await axios.get(TOP_TRACKS_ENDPOINT, {
    params: {
      time_range: "short_term",
    },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return data;
};

export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();

  const { data } = await axios.get(CURRENTLY_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return data;
};
