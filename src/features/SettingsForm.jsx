import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { settingsSchema } from "./settingsSchema";
import "./SettingsForm.css";

export default function SettingsForm() {
  const [saved, setSaved] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    setSaved(true);
    reset(values);
  }

  return (
    <section className="settings-form">
      <header className="settings-form__header">
        <h1>Account settings</h1>
        <p>Update your email address and password.</p>
      </header>

      <form
        className="settings-form__body"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="settings-form__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="settings-form__error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="settings-form__field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
            {...register("password")}
          />
          {errors.password && (
            <p id="password-error" className="settings-form__error" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="settings-form__field">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby={
              errors.confirmPassword ? "confirm-password-error" : undefined
            }
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p
              id="confirm-password-error"
              className="settings-form__error"
              role="alert"
            >
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button type="submit" className="settings-form__submit">
          Save settings
        </button>
      </form>

      {saved && (
        <p className="settings-form__success" role="status">
          Settings saved!
        </p>
      )}
    </section>
  );
}
