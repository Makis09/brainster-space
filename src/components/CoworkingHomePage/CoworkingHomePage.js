import React from 'react';
import HorizontalBigCard from '../Cards/HorizontalBigCard';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';
import {Element } from 'react-scroll';



const CoworkingHomePage = () => {

    return (
      <Element name="coworking">
        <HorizontalBigCard
            id='coworking'
            className='Coworking'
            badge='SOLD OUT'
            title='Coworking'
            text='Биди дел од tech заедницата на иноватори, креативци и претприемачи. Резервирај стол во нашата shared office. Пичирај го твојот бизнис и нашиот тим заедно ке одлучи секој месец со кого да ги дели своите канцеларии.'
            image='/homepage/Za nas/coworking'
       >
      <>
      <OverlayTrigger
        trigger="click"
        placement='bottom'
        overlay={
          <Popover >
            <Popover.Content>
              <strong>Местата се распродадени</strong>
            </Popover.Content>
          </Popover>
        }
      >
        <Button variant="secondary">РЕЗЕРВИРАЈ МЕСТО</Button>
      </OverlayTrigger>{' '}
    </>
        </HorizontalBigCard>
        </Element>
    )
}

export default CoworkingHomePage;