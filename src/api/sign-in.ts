import axios from "axios";

interface UserData {
  email: string;
  password: string;
}

export const SignIn = async (params: UserData) => {
  const url = "http://localhost:3000/api/v1/auth/sign_in";
  await axios
    .post(url, params)
    .then((data) => {
      console.log(data);

      // 取得したresponseより、アクセストークンなどを変数に代入
      const accessToken = data.headers["access-token"];
      const client = data.headers["client"];
      const uid = data.headers["uid"];

      // 認証情報をlocalStorageに保存する
      localStorage.setItem("access-token", accessToken);
      localStorage.setItem("client", client);
      localStorage.setItem("uid", uid);
    })
    .catch((error) => {
      // console.log(error);
      // console.log("エラー");
      throw error;
    });
};
