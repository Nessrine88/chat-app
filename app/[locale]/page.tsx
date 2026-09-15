
import { getTranslations } from "next-intl/server";
export default async function Home() {
 const t = await getTranslations("Homepage")
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1 className="text-7xl">{t("title")} </h1>
    </div>
  );
}
