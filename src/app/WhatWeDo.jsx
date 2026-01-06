import { LuCalendarClock } from "react-icons/lu";
import { RiToothLine } from "react-icons/ri";
import { IoBarChartOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";
import decor from "../assets/images/decor-blue.svg";
import Image from "next/image";

const list = [
  {
    id: 1,

    icon: RiToothLine,
    title: "إدارة المرضى",
    p: "تنظيم كامل لبيانات المرضى وسجلاتهم الطبية وتاريخ العلاجات.",
  },
  {
    id: 2,

    icon: LuCalendarClock,
    title: "تنظيم المواعيد",
    p: "جدولة المواعيد بسهولة لتفادي الازدحام وضمان سير العمل بسلاسة.",
  },
  {
    id: 3,

    icon: FaRegCreditCard,
    title: "الفوترة والمدفوعات",
    p: "إصدار فواتير دقيقة ومتابعة المدفوعات بكل وضوح.",
  },
  {
    id: 4,

    icon: IoBarChartOutline,
    title: "التقارير والمتابعة",
    p: "تقارير تساعدك على متابعة أداء العيادة واتخاذ قرارات مدروسة.",
  },
];

const WhatWeDo = () => {
  return (
    <div className="WhatWeDo" dir="rtl">
      <Image className="decor" src={decor} alt="decor" />
      <div className="content">
        <h4>ما الذي نقدمه؟</h4>
        <h5 className="secon">ماهي الخدمات الذي نقدمها في نظامنا</h5>

        <div className="WhatWeDoCards">
          {list.map((i) => (
            <div className="WhatWeDoCard" key={i.id}>
              <div className="icon">
                <i.icon />
                {/* <Image src={i.icon} alt="" /> */}
              </div>
              <div className="texts">
                <p className="title">{i.title}</p>
                <p className="para">{i.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
