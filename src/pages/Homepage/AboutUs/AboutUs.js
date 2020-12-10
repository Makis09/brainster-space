import React, { useContext, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import VerticalCard from "../../../components/Cards/VerticalCard";
import { MyContext } from "../../../Context/MyContext";
import CompanyInovationModal from "../../../components/Forms/CompanyInovationModal";
import HorizontalBigCard from "../../../components/Cards/HorizontalBigCard";

const AboutUs = () => {
  const { setShowPartnershipModal, setShowCompanyInovationModal } = useContext(
    MyContext
  );
  const [isEducation, setIsEducation] = useState(true);
  const educationInfo = {
    title: "ЕДУКАЦИЈА",
    text:
      "Дали се подготвен да одговориш на потребите на иднината. Вистинските курсеви, академии и семинари кои ќе ти овозможат кариерна трансформација во областа дигитален маркетинг, дизајн, програмирање и Data Science.",
    image: "edukacija1",
  };
  const companiesInfo = {
    title: "КОМПАНИИ",
    text:
      "Компаниите имаат можност да ги надоградат своите тимови, а со тоа да го подобрат перформансот на својата компанија. \n Дигиталната трансформација се случува, а вашите компании треба да бидат подготвени за да се адаптираат соодветно. Обуки, семинари, курсеви или team building? \n Во Brainster Space имаме специјално обучен тим кој е подготвен да ја насочи, адаптира и сподели својата експертиза со денешните потреби на компаниите.",
    image: "companies",
  };

  const companiesInfoText = companiesInfo.text
    .split("\n")
    .map((text, index) => (
      <React.Fragment key={index}>
        {text}
        <br />
        <br />
      </React.Fragment>
    ));

  const findCoworking = (e) => {
    e.preventDefault();
    document.getElementById("coworking-section").click();
  };

  return (
    <Row className="AboutUs">
      <Col md={12}>
        <h1 className="text-center">За Нас</h1>
      </Col>
      <VerticalCard
        image="/homepage/Za nas/edukacija1.jpg"
        title="Едукација"
        text="Научи практични вештини за трансформација во кариерата. Нашата специјалност е да ти помогнеме да го најдеш правилниот skill set кој ќе одговори на реалните потреби на пазарот на труд. Организираме курсеви, академии и персонализирани обуки кои одговараат на реалните потреби на денешницата."
        location="https://brainster.co/"
      />
      <VerticalCard
        image="/homepage/Za nas/nastani.jpg"
        title="Настани"
        text="Специјално курирани и организирани настани кои ги поврзуваат правите таленти со иновативните компании. Идејата е да нашата tech заедница расте, се инспирира и креира преку овие настани."
        location="/events"
      />
      <VerticalCard
        image="/homepage/Za nas/coworking.jpg"
        title="Coworking"
        text="Биди дел од tech заедницата на иноватори, кретивци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ке одлучи секој месец со кого да ги дели своите канцеларии."
        location="coworking"
        function={(e) => findCoworking(e)}
      />
      <VerticalCard
        image="/homepage/Za nas/prostor za nastani.jpg"
        title="Простор за настани"
        text="Имаш идеја за обука или настан од tech областа? Ние имаме простор за реализација. Нашиот тим внимателно ги одбира и курира сите настани."
        location="/events-space"
      />
      <VerticalCard
        image="/homepage/Za nas/partnerstva so tech komp.jpg"
        title="Партнерства со tech компании"
        text="Целта и идејата е креирање на tech заедница која ќе се негува, расте и креира подобро утро за сите нас. Преку директно и индиректно поврзување на tech талентите со компаниите."
        location="/"
        function={() => setShowPartnershipModal(true)}
      />
      <VerticalCard
        image="/homepage/Za nas/IMG_7397.jpg"
        title="Иновации за компании"
        text="Нов концепт кој ќе им помогне на компаниите да преминат од стариот во новиот начин на работење. Подгответе ја вашата компанија за дигитална трансформација."
        location="/"
        function={() => setShowCompanyInovationModal(true)}
      />
      <CompanyInovationModal />
      <HorizontalBigCard
        style={isEducation ? { display: "flex" } : { display: "none" }}
        title={educationInfo.title}
        text={educationInfo.text}
        button="akademii"
        button2="kompanii"
        image={`/homepage/Za nas/${educationInfo.image}`}
      >
        <Button onClick={() => setIsEducation(true)} className="blackBtn">
          АКАДЕМИИ
        </Button>
        <Button onClick={() => setIsEducation(false)} className="yellowBtn">
          ЗА КОМПАНИИ
        </Button>
      </HorizontalBigCard>
      <HorizontalBigCard
        style={isEducation ? { display: "none" } : { display: "flex" }}
        title={companiesInfo.title}
        text={companiesInfoText}
        button="akademii"
        button2="kompanii"
        image={`/homepage/Za nas/${companiesInfo.image}`}
      >
        <Button onClick={() => setIsEducation(true)} className="blackBtn">
          АКАДЕМИИ
        </Button>
        <Button onClick={() => setIsEducation(false)} className="yellowBtn">
          ЗА КОМПАНИИ
        </Button>
      </HorizontalBigCard>
    </Row>
  );
};

export default AboutUs;
