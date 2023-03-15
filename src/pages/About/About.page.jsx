import React from "react";
import AboutWrapper from "./About.styles.js";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import Statistics from "../../components/Statistics/Statistics.component.jsx";

const About = () => {
  return (
    <AboutWrapper>
      <PageBanner page="Haqqımızda" />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <h1>Haqqımızda</h1>
            <p>
              Azhome.az saytının məqsədi əsasən ölkə ərazisində tikinti sektero
              üzrə inşaat materialları və ustalar barədə məlumatları bir yerdə
              toplamaqla istifadəçilər üçün daha əlçatan etməkdir. Sayt
              Azərbaycanda olmayan növdə bir ixtisaslı online bazar platforması
              yaratmaqla istifadə üçün lazımı olan elanları daha çox çeşidlə və
              qiymət fərqi ilə daha rahat seçim etmək imkanın olmasını
              hədəfləməkdədir. Saytda əsasən fiziki şəxslərlə yanaşı
              mağaza,firma və şirkətlər də hesab açaraq məhsullarının elanını
              yerləşdirə bilər, həmçinin saytda yaradılmış VİP və ya PREMUM
              etmək imkanı ilə məhsulu daha önə çıxarmağa və alıcı kütləsini
              artırmağı imkan verir.
            </p>
            <h1>Sayt rəhbərliyi</h1>
            <p>
              Servisin inzibatçılığını Azərbaycan Respublikasının
              qanunvericiliyinə uyğun olaraq yaradılmış və qeydiyyatdan keçmiş
              vergi ödəyicisi həyata keçirir. Servisə dair bütün mülkiyyət
              hüquqları müstəsna olaraq sahibkara məxsusdur. <br />
              VÖEN: 1805799812 <br />
              Əlaqə nömrəsi: +994 55-661-90-54 <br />
              F/Ş. adı və soyadı: İmanova Günel Əkbər qızı <br />
              Email: gunelimanova@azhome.az <br />
            </p>
          </div>
        </div>
      </div>
      <Statistics />
    </AboutWrapper>
  );
};

export default About;
