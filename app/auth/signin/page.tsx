import { SubmitButton } from "@/components/SubmitButton";
import { login } from "@/actions/auth/login";

const page = () => {
  return (
    <form action={login}>
      <SubmitButton label="Sign In" loadingLabel="Signing in..." />
    </form>
  );
};

export default page;
