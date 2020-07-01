import React from 'react';
import './Academies.css';
import { Row, Col } from 'react-bootstrap';
import HorizontalBigCard from '../Cards/HorizontalBigCard';
import AcademyCard from '../Cards/AcademyCard';


const Academies = () => {

    return (
        <Row className='Academies'>
            <Col md={12}>
                <HorizontalBigCard
                    title='Академии'
                    text={`Нашите академии ќе ти помогнат да ги совладаш најбараните вештини на денешницата преку интерактивна настава и практична работа на реални проекти. \n \nИнструктори кои се докажани експерти во својата област. Преку нив имаш можност да ги научиш и предвидиш предизвиците на иднината на работење и да се поврзеш со сегашните и идните врвни професионалци и компании. \n\nАкадемиите ќе ти го отворат патот кон кариера каква што посакуваш.`}
                    image='/homepage/Za nas/prostor za nastani'
                />
            </Col>
            <AcademyCard
                title='Академија за графички дизајн'
                availablePlaces='4'
                link='https://design.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=design'
                joinUntil='мај 2020'
                position='графички дизајнер'
                academyMonthsDuration='7'
                employmentPartners='11'
                image='dizajn.jpg'
                bg='rgb(27,2,40)'
                bgGradient='linear-gradient(0deg, rgba(27,2,40,0.95) 0%, rgba(74,4,112,0.8) 100%)'
            />
            <AcademyCard
                title='Академија за дигитален маркетинг'
                availablePlaces='3'
                link='https://marketpreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=mkt'
                joinUntil='мај 2020'
                position='Дигитален маркетер'
                academyMonthsDuration='6'
                employmentPartners='15'
                image='marketing.jpg'
                bg='rgb(98,3,3'
                bgGradient='linear-gradient(0deg, rgba(98,3,3,0.9) 0%, rgba(148,8,8,0.8) 100%)'
            />
            <AcademyCard
                title='Академија за Front-end програмирање'
                availablePlaces='3'
                link='https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=frontend'
                joinUntil='јуни 2020'
                position='Front-end програмер'
                academyMonthsDuration='9'
                employmentPartners='12'
                image='frontEnd.jpg'
                bg='rgb(224,151,23)'
                bgGradient='linear-gradient(0deg, rgba(224,151,23,0.8) 0%, rgba(241,168,6,0.7) 100%)'
            />
            <AcademyCard
                title='Академија за Full-stack програмирање'
                availablePlaces='4'
                link='https://codepreneurs.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=fullstack'
                joinUntil='јуни 2020'
                position='Full-stack програме'
                academyMonthsDuration='10'
                employmentPartners='12'
                image='backEnd.png'
                bg='rgb(45,47,47)'
                bgGradient='linear-gradient(0deg, rgba(45,47,47,0.6) 0%, rgba(114,119,120,0.5) 100%)'
            />
            <AcademyCard
                title='Академија за Data science'
                availablePlaces='2'
                link='https://datascience.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=data_science'
                joinUntil='јуни 2020'
                position='Junior Data Scientist'
                academyMonthsDuration='12'
                employmentPartners='6'
                image='dataScience.jpg'
                bg='rgb(13,74,22)'
                bgGradient='linear-gradient(0deg, rgba(13,74,22,0.9) 0%, rgba(32,145,49,0.8) 100%)'
            />
            <AcademyCard
                title='Академија за software testing'
                availablePlaces='3'
                link='https://qa.brainster.co/?utm_source=brainster.co&utm_medium=academies&utm_campaign=website&utm_content=qa'
                joinUntil='јуни 2020'
                position='Software Tester'
                academyMonthsDuration='6'
                employmentPartners='10'
                image='testing.jpg'
                bg='rgb(4,68,94)'
                bgGradient='linear-gradient(0deg, rgba(4,68,94,0.9) 0%, rgba(15,99,136,0.8) 100%)'
            />
        </Row>
    )
}

export default Academies;