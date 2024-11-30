import { useTranslations } from "next-intl";

export default function ModelDesign() {
  const translate = useTranslations("Configurator");
  return (
    <div className="flex-grow bg-blue-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {translate("title")}
        </h2>
        <p>{translate("description")}</p>
      </div>
    </div>
  );
}
