import Image from "next/image";
import create_account from "../assets/images/create-account.svg";
import data_entry from "../assets/images/data-entry.svg";
import managment from "../assets/images/managment.svg";
import { RiChat3Line } from "react-icons/ri";
import decor from "../assets/images/decor.svg";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      svg: create_account,
      title: "حجز نسخة النظام",
      des: "ابدأ بحجز نسخة النظام الخاصة بعيادتك، واستفد من إدارة متكاملة وسهلة لجميع أعمالك اليومية.",
    },
    {
      id: 2,
      svg: data_entry,
      title: "إعداد بيانات العيادة",
      des: "قم بإدخال معلومات العيادة، الأطباء، والمواعيد ليكون النظام جاهزًا للاستخدام.",
    },
    {
      id: 3,
      svg: managment,
      title: "الإدارة والمتابعة",
      des: "تحكّم بالمواعيد، المرضى، والتقارير اليومية من لوحة تحكم واحدة وبكل سهولة.",
    },
  ];
  return (
    <section className="HowItWorks">
      <h4>كيف يعمل النظام؟</h4>
      <h5>نظام مُجهّز ليعمل فورًا دون تعقيد تقني</h5>

      <div className="steps">
        {steps.map((s) => (
          <div className="step" key={s.id}>
            <div className="vectors">
              <Image className="decor" src={decor} alt="decor" />
              <span>0{s.id}</span>
              <Image src={s.svg} alt="vector" />
            </div>
            <div className="content" dir="rtl">
              <h6>{s.title}</h6>
              <p>{s.des}</p>
              {s.id === 1 && (
                <button className="contactUs">
                  تواصل معنا
                  <RiChat3Line />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
