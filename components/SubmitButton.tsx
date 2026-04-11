"use client";

import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  label: string;
  loadingLabel?: string;
}

export function SubmitButton({ label }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-700 px-4 py-2 rounded-sm disabled:opacity-50"
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <Loader className="animate-spin" />
          Loading...
        </div>
      ) : (
        label
      )}
    </button>
  );
}
