import React from 'react';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
  const { t } = useTranslation();

  return <div>
    <h1>{t("dashboard.welcome")}</h1>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </div>;
}
