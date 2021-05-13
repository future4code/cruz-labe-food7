export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToSignUpPage = (history) => {
  history.replace("/signup");
};
export const goToAddressPage = (history) => {
  history.replace("/address");
};

export const goToHomePage = (history) => {
  history.replace("/");
};

export const goToCartPage = (history) => {
  history.replace("/cart");
};

export const goToRestaurantPage = (history, id) => {
  history.push(`/restaurant/${id}`);
};

export const goToPreviousPage = (history) => {
  history.goBack();
};

export const goToProfile = (history) => {
  history.push("/profile");
};

export const goToEditAddress = (history) => {
  history.push("/edit-address");
};

export const goToEditProfile = (history) => {
  history.push("/edit-profile");
};

