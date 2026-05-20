import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import Seat from "../components/Seat/Seat";
import type { Movie } from "./Films";
import "./Zitplaatsen.css";

const SEAT_ROWS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const SEATS_PER_ROW = 12;
const TAKEN_SEATS = [
  "A4", "A5", "A6", "B7", "B8", "C3", "C9",
  "D5", "D6", "E10", "E11", "F2", "F3",
  "G7", "G8", "G9", "H1", "H12",
];

const Zitplaatsen = () => {
  const movie = useLoaderData() as Movie;
  const [searchParams] = useSearchParams();

  const [gekozenStoelen, setGekozenStoelen] = useState<string[]>([]);

  const uur = searchParams.get("uur") || movie.uren[0];
  const formaat = searchParams.get("formaat") || movie.formaten[0];

  const klikStoel = (stoelId: string) => {
    if (TAKEN_SEATS.includes(stoelId)) return;

    if (gekozenStoelen.includes(stoelId)) {
      setGekozenStoelen(gekozenStoelen.filter((s) => s !== stoelId));
    } else {
      setGekozenStoelen([...gekozenStoelen, stoelId]);
    }
  };

  const getStatus = (stoelId: string): "available" | "taken" | "selected" => {
    if (TAKEN_SEATS.includes(stoelId)) return "taken";
    if (gekozenStoelen.includes(stoelId)) return "selected";
    return "available";
  };

  const stoelnummers: number[] = [];
  for (let i = 1; i <= SEATS_PER_ROW; i++) {
    stoelnummers.push(i);
  }

  const prijs = gekozenStoelen.length * movie.basePrice;

  const verderLink = `/films/${movie.id}/betaalmethode?uur=${uur}&formaat=${formaat}&stoelen=${gekozenStoelen.join(",")}`;

  return (
    <article>
      <Heading level={1}>Zitplaatsen kiezen</Heading>

      <div className="zitplaatsen__screen">SCHERM</div>

      <div className="zitplaatsen__map">
        {SEAT_ROWS.map((rij) => (
          <div key={rij} className="zitplaatsen__row">
            <span className="zitplaatsen__row-label">{rij}</span>
            <div className="zitplaatsen__row-seats">
              {stoelnummers.map((nr) => {
                const stoelId = `${rij}${nr}`;
                return (
                  <Seat
                    key={stoelId}
                    id={stoelId}
                    status={getStatus(stoelId)}
                    onClick={() => klikStoel(stoelId)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="zitplaatsen__legend">
        <span>
          <span className="zitplaatsen__dot zitplaatsen__dot--available"></span>
          vrij
        </span>
        <span>
          <span className="zitplaatsen__dot zitplaatsen__dot--selected"></span>
          gekozen
        </span>
        <span>
          <span className="zitplaatsen__dot zitplaatsen__dot--taken"></span>
          bezet
        </span>
      </div>

      <div className="zitplaatsen__info">
        <div className="zitplaatsen__info-row">
          <span>aantal personen</span>
          <span>{gekozenStoelen.length}</span>
        </div>
        <div className="zitplaatsen__info-row">
          <span>formaat</span>
          <span>{formaat}</span>
        </div>
        <div className="zitplaatsen__info-row zitplaatsen__info-row--prijs">
          <span>prijs</span>
          <span>€ {prijs.toFixed(2)}</span>
        </div>
      </div>

      <footer className="zitplaatsen__actions">
        <Button type="secondary" link={`/films/${movie.id}`}>
          Terug
        </Button>
        <Button link={verderLink}>
          Verder
        </Button>
      </footer>
    </article>
  );
};

export default Zitplaatsen;