import { useState, type FormEvent } from "react";
import {
  validateSettingsForm,
  type SettingsFormErrors,
  type SettingsFormValues,
} from "./validateSettingsForm";
import "./SettingsForm.css";

const initialValues: SettingsFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SettingsForm() {
  const [values, setValues] = useState<SettingsFormValues>(initialValues);
  const [errors, setErrors] = useState<SettingsFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof SettingsFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (submitted) {
      setSubmitted(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateSettingsForm(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <section className="settings-form">
      <header className="settings-form__header">
        <h1>Paramètres du compte</h1>
        <p>Mettez à jour votre adresse e-mail et votre mot de passe.</p>
      </header>

      <form className="settings-form__body" onSubmit={handleSubmit} noValidate>
        <div className="settings-form__field">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => handleChange("email", event.target.value)}
          />
          {errors.email && (
            <p id="email-error" className="settings-form__error" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className="settings-form__field">
          <label htmlFor="password">Nouveau mot de passe</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={values.password}
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
            onChange={(event) => handleChange("password", event.target.value)}
          />
          {errors.password && (
            <p id="password-error" className="settings-form__error" role="alert">
              {errors.password}
            </p>
          )}
        </div>

        <div className="settings-form__field">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={values.confirmPassword}
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
            onChange={(event) => handleChange("confirmPassword", event.target.value)}
          />
          {errors.confirmPassword && (
            <p id="confirm-password-error" className="settings-form__error" role="alert">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button type="submit" className="settings-form__submit">
          Enregistrer
        </button>
      </form>

      {submitted && (
        <p className="settings-form__success" role="status">
          Paramètres enregistrés avec succès.
        </p>
      )}
    </section>
  );
}
