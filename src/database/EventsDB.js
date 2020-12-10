import { v1 as uuid } from "uuid";

let EventsDB = [
  {
    id: uuid(),
    title: "Codeworks",
    text:
      "Вистинскиот настан за сите tech таленти кои сакаат да кодираат и да научат што е ново во tech заедницата. Настан кој ги поврзува mid програмерите со IT компаниите. \n Deep Dive Intensive Seminar \n Ексклузивни семинари кои комбинираат три различни техники на учење.",
    image: "codeworks",
    url: "https://brainster.co/",
    calendarDetails: [
      {
        title: "Codeworks",
        start: new Date("January 12, 2021 19:00:00"),
        end: new Date("January 12, 2021 21:00:00"),
        additionalInfo: "",
        color: "green",
      },
    ],
  },
  {
    id: uuid(),
    title: "Deep Dive into Marketing",
    text:
      "Deep Dive into Marketing се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа на маркетингот.",
    image: "deepDiveIntoMarketing",
    url: "https://brainster.co/",
    calendarDetails: [
      {
        title: "Deep Dive into Marketing",
        start: new Date("December 02, 2020 19:30:00"),
        end: new Date("December 02, 2020 21:00:00"),
        additionalInfo: "Ден 1",
        color: "red",
      },
      {
        title: "Deep Dive into Marketing",
        start: new Date("December 11, 2020 19:00:00"),
        end: new Date("December 11, 2020 22:00:00"),
        additionalInfo: "Ден 2",
        color: "red",
      },
    ],
  },
  {
    id: uuid(),
    title: "Deep Dive into Data Science",
    text:
      "Deep Dive into Data Science се серија од интензивни семинари кои се наменски подготвени да ти помогнат да ги совладаш и предвидиш современите промени, предизвици и идните трендови во областа на Data Science.",
    image: "deepDiveIntoDataScience",
    url: "https://brainster.co/",
    calendarDetails: [
      {
        title: "Deep Dive into Data Science",
        start: new Date("December 21, 2020 18:00:00"),
        end: new Date("December 21, 2020 20:00:00"),
        additionalInfo: "Ден 1",
        color: "blue",
      },
      {
        title: "Deep Dive into Data Science",
        start: new Date("December 22, 2020 18:00:00"),
        end: new Date("December 22, 2020 20:00:00"),
        additionalInfo: "Ден 2",
        color: "blue",
      },
    ],
  },
];

export default EventsDB;
