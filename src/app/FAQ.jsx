"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import decor from "../assets/images/decor.svg";
import Image from "next/image";

const faqs = [
  {
    question: "هل النظام مناسب لجميع أنواع العيادات؟",
    answer:
      "نعم، النظام مصمم ليتناسب مع مختلف أنواع العيادات الطبية وقابل للتخصيص حسب احتياجات كل عيادة.",
  },
  {
    question: "هل يتطلب النظام خبرة تقنية؟",
    answer:
      "لا، تم تصميم النظام بواجهة بسيطة وسهلة الاستخدام دون الحاجة لأي خبرة تقنية مسبقة.",
  },
  {
    question: "هل يمكن تجربة النظام قبل الاشتراك؟",
    answer:
      "يمكنك التواصل معنا لطلب عرض توضيحي للنظام والتعرّف على جميع الميزات قبل حجز النسخة.",
  },
];

export default function FAQ() {
  const [OpenIndex, setOpenIndex] = useState(null);
  return (
    <section className="FAQ" dir="rtl">
      <h4 className="">الأسئلة الشائعة</h4>

      <Image className="decor" src={decor} alt="decor" />

      <div className="Questions">
        {faqs.map((q, index) => {
          const isOpen = OpenIndex === index;

          return (
            <div className="question" key={index}>
              <button onClick={() => setOpenIndex(isOpen ? null : index)}>
                {q.question}
                <IoIosArrowDown />
              </button>
              {isOpen && <div className="answer">{q.answer}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
