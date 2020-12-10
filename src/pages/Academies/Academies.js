import React, { useContext } from "react";
import "./Academies.css";
import { Row, Col } from "react-bootstrap";
import HorizontalBigCard from "../../components/Cards/HorizontalBigCard";
import AcademyCard from "../../components/Cards/AcademyCard";
import { MyContext } from "../../Context/MyContext";

const Academies = () => {
  const { academies } = useContext(MyContext);
  return (
    <Row className="Academies">
      <Col md={12}>
        <HorizontalBigCard
          title="Академии"
          text={`Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на денешницата преку интерактивна настава и практична работа на реални проекти. \n \nИнструктори кои се докажани експерти во својата област. Преку нив имаш можност да ги научиш и предвидиш предизвиците на иднината на работење и да се поврзеш со сегашните и идните врвни професионалци и компании. \n\nАкадемиите ќе ти го отворат патот кон кариера каква што посакуваш.`}
          image="/homepage/Za nas/prostor za nastani"
        />
      </Col>
      {academies.map((academy) => (
        <AcademyCard
          key={academy.title}
          title={academy.title}
          availablePlaces={academy.availablePlaces}
          link={academy.link}
          joinUntil={academy.joinUntil}
          position={academy.position}
          academyMonthsDuration={academy.academyMonthsDuration}
          employmentPartners={academy.employmentPartners}
          image={academy.image}
          bg={academy.bg}
          bgGradient={academy.bgGradient}
        />
      ))}
    </Row>
  );
};

export default Academies;
