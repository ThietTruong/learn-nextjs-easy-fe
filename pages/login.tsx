import authApi from "@/axios-client/auth-api";
import { EmptyLayout, MainLayout } from "@/components/layouts";
import { useAuth } from "@/hooks/use-auth";

export interface ILoginPageProps {}

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  async function handleLoginClick() {
    try {
      await login();
      console.log("Redirect to dashboard");
    } catch (error) {
      console.error(error);
    }
  }
  async function handleLogoutClick() {
    try {
      await logout();
      console.log("Redirect to login page");
    } catch (error) {
      console.error(error);
    }
  }
  async function handleGetProfileClick() {
    try {
      console.log("Profile", profile);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Login page</h1>
      <div>Profile: {profile ? JSON.stringify(profile) : "null"}</div>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
    </div>
  );
}
