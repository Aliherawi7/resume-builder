import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          summary: "Summary",
          
          Jan: "Jan",
          Feb: "Feb",
          Mar: "Mar",
          Apr: "Apr",
          May: "May",
          Jun: "Jun",
          July: "July",
          Aug: "Aug",
          Sep: "Sep",
          Oct: "Oct",
          Nov: "Nov",
          Dec: "Dec",
          notFoundMsg: "Page Not Found!",
        },
      },
      fa: {
        translation: {
          AliHerawi: "علی احمد هروی",
          summary: "خلاصه",
          date: "تاریخ",
          
          AccountDetails: "جزئیات حساب‌کاربری",
          contacts: "اطلاعات تماس",
          edit: "ویرایش",
          userName: "نام کاربری",
          pass: "رمز ورود",
          phoneNumber: "شماره تماس",
          email: "ایمیل",
          address: "آدرس",
          upload: "بارگزاری",
          location: "موقعیت مکان",
          actions: "عملیات",
          modalMessage: "آیا درباره حذف   مطمئن هستید؟",
          delete: "حذف",
          cancel: "صرف‌نظر",
          category: "دسته بندی",
          all: "همه",
          Jan: "دی",
          Feb: "بهمن",
          Mar: "اسفند",
          Apr: "فروردین",
          May: "اردیبهشت",
          Jun: "خرداد",
          July: "تیر",
          Aug: "مرداد",
          Sep: "شهریور",
          Oct: "مهر",
          Nov: "آبان",
          Dec: "آذر",
          notFoundMsg: "صفحه مورد نظر یافت نشد!",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;
