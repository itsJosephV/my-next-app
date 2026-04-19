import { SubmitButton } from "@/components/SubmitButton";
import { login } from "@/actions/auth/login";

const page = () => {
  return (
    <div className="p-5">
      <form action={login}>
        <SubmitButton label="Sign In" loadingLabel="Signing in..." />
      </form>
    </div>
  );
};

export default page;
