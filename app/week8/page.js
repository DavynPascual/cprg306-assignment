import { useUserAuth } from "./_utils/auth-context";

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

if (user === null) {
  // User is not logged in
  const loginButton = document.createElement("button");
  loginButton.textContent = "Login";
  // Add event listener to handle login button click
  loginButton.addEventListener("click", gitHubSignIn);
  document.body.appendChild(loginButton);
} else {
  // User is logged in
  const welcomeMessage = document.createElement("p");
  welcomeMessage.textContent = `Welcome, ${user.displayName} (${user.email})`;
  document.body.appendChild(welcomeMessage);

  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logout";
  // Add event listener to handle logout button click
  logoutButton.addEventListener("click", firebaseSignOut);
  document.body.appendChild(logoutButton);

  const shoppingListLink = document.createElement("a");
  shoppingListLink.textContent = "Go to Shopping List";
  shoppingListLink.href = "/shopping-list";
  document.body.appendChild(shoppingListLink);
}
