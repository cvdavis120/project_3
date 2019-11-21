const adminInfoReducerDefaultState = {
  email: ".",
  password: "",
  account_type: "",
  firstName: "",
  lastName: "",
  super: true,
  workSpace: "",
  dateJoined: "",
  sessions: 0,
  startingWeight: 0,
  currentWeight: 0,
  goalWeight: 0,
  notes: "",
  userImage:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs7d5.scene7.com%2Fis%2Fimage%2FAnthropologie%2F39483722_027_b%3F%24a15-pdp-detail-shot%24%26hei%3D900%26qlt%3D80%26fit%3Dconstrain&imgrefurl=https%3A%2F%2Fwww.anthropologie.com%2Fshop%2Fmadeleine-mirror&docid=OYwdxAeUdSZX-M&tbnid=JtVCXNuLVazrrM%3A&vet=10ahUKEwiA_JTVifzlAhU5FzQIHXTRCE8QMwjMAigGMAY..i&w=601&h=900&safe=off&bih=683&biw=1104&q=mirror&ved=0ahUKEwiA_JTVifzlAhU5FzQIHXTRCE8QMwjMAigGMAY&iact=mrc&uact=8"
};

export default (state = adminInfoReducerDefaultState, action) => {
  switch (action.type) {
    case "UPDATE_ADMIN_PROFILE":
      return action.currentUser;
    default:
      return state;
  }
};
