const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SettingsFormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SettingsFormErrors = Partial<Record<keyof SettingsFormValues, string>>;

export function validateSettingsForm(values: SettingsFormValues): SettingsFormErrors {
  const errors: SettingsFormErrors = {};

  const email = values.email.trim();
  if (!email) {
    errors.email = "L'adresse e-mail est requise.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Adresse e-mail invalide.";
  }

  if (!values.password) {
    errors.password = "Le mot de passe est requis.";
  } else if (values.password.length < 8) {
    errors.password = "Le mot de passe doit contenir au moins 8 caractères.";
  } else if (!/[A-Z]/.test(values.password) || !/[0-9]/.test(values.password)) {
    errors.password = "Le mot de passe doit inclure une majuscule et un chiffre.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Veuillez confirmer le mot de passe.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Les mots de passe ne correspondent pas.";
  }

  return errors;
}
