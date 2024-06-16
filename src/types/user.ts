export interface UserI {
  username: string;
  status: "idle" | "loading" | "error";
  position: {
    latitude: number;
    longitude: number;
  } | null;
  address: string;
  error: string;
}
