
import { useTranslations } from "next-intl";
export default  function Home() {
 const t =  useTranslations("Homepage")
  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
     <h1 className="text-7xl">{t("title")} </h1>
    </div>
  );
}
