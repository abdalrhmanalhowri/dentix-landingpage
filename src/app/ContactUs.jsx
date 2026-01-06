import Image from "next/image";
import doctor from "../assets/images/doctor2.png";
import decor from "../assets/images/decor.svg";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="ContactUs" dir="rtl">
      <Image className="decor" src={decor} alt="decor" />
      <div className="right-side">
        <div className="phone" dir="rtl">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <div className="texts">
            <p className="num">رقم الهاتف</p>
            <p className="title">+963 994 703 411</p>
          </div>
        </div>
        <Image src={doctor} alt="doctor" />
      </div>
      <div className="left-side">
        <div className="texts">
          <h4>
            {" "}
            <span>تواصل معنا </span>لحجز نسخة النظام
          </h4>
          <h6>فريقنا جاهز لمساعدتك والرد على جميع استفساراتك</h6>
        </div>
        <div className="contact_form">
          <form action="">
            <input type="email" placeholder="البريد الالكتروني" />
            <textarea placeholder="الرسالة" />
            <button>إرسال</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
