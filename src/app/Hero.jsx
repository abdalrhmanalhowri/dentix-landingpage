import Image from "next/image";
import doctor from "../assets/images/doctor-dentist.png";
import decor from "../assets/images/decor.svg";
import { AiFillLike } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="Hero">
      <Image className="decor" src={decor} alt="decor" />
      <div className="left-side">
        <Image className="doctor-img" src={doctor} alt="doctor" />
        <div className="clients" dir="rtl">
          <div className="icon">
            <AiFillLike />
          </div>
          <div className="texts">
            <p className="num">+100</p>
            <p className="title">عيادة تثق بنظامنا</p>
          </div>
        </div>
      </div>
      <div className="content" dir="rtl">
        <h1>
          <span>نظام ذكي </span>
          لإدارة عيادتك السنية بكل سهولة
        </h1>
        <p>
          نظّم المواعيد، سجلات المرضى، والفواتير من لوحة تحكم واحدة مصممة خصيصًا
          لعيادات الأسنان.
        </p>
        <button>احجز عرضًا توضيحيًا</button>
      </div>
    </div>
  );
};

export default Hero;
