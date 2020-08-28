export default {
  api: {
    baseUrl: "https://randomuser.me/api/",
    seed: "fe2020-1",
    user: {
      fields: ["id", "name", "gender", "email", "picture"],
      allowParams: ["page", "seed", "results", "inc"],
    },
  },
};
