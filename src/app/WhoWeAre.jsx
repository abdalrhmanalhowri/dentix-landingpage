import Image from "next/image";
import dentist_image from "../assets/images/dentist-ipad.jpg";
import { FaTooth } from "react-icons/fa";
import { RiSettings3Fill } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import decor from "../assets/images/decor.svg";

const WhoWeAre = () => {
  return (
    <section className="WhoWeAre">
      <Image className="decor" src={decor} alt="decor" />
      <div className="content" dir="rtl">
        <h3>من نحن؟</h3>
        <p className="des">
          نحن فريق عمل يهدف إلى تبسيط إدارة العيادات السنية من خلال نظام ذكي
          وسهل الاستخدام، يساعد الأطباء على تنظيم مواعيدهم وسجلات مرضاهم
          والتركيز على تقديم أفضل رعاية ممكنة.
        </p>
        <div className="boxes">
          <div className="box">
            <div className="icon">
              <FaTooth />
            </div>
            <div>
              <p className="title">مصمم لعيادات الأسنان</p>
              <p className="paragraph">
                تم تطوير النظام خصيصًا ليناسب سير العمل اليومي داخل العيادات
                السنية.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <RiSettings3Fill />
            </div>
            <div>
              <p className="title">سهل وعملي</p>
              <p className="paragraph">
                واجهة بسيطة تمكّنك من استخدام النظام دون الحاجة لأي خبرة تقنية.
              </p>
            </div>
          </div>
        </div>
        {/* <button>
          المزيد <IoIosArrowRoundBack />
        </button> */}
      </div>
      <div className="image">
        <Image src={dentist_image} alt="dentist" />
      </div>
    </section>
  );
};

export default WhoWeAre;
