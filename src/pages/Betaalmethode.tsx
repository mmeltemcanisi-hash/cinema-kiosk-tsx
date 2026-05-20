import { useState } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import type { Movie } from "./Films";
import "./Betaalmethode.css";

type PaymentMethod = {
  id: string;
  name: string;
  icon: string;
};

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "bancontact", name: "Bancontact", icon: "BC" },
  { id: "visa",       name: "Visa",       icon: "V"  },
  { id: "mastercard", name: "Mastercard", icon: "MC" },
  { id: "kbc",        name: "KBC",        icon: "KBC"},
  { id: "maestro",    name: "Maestro",    icon: "M"  },
  { id: "paypal",     name: "PayPal",     icon: "PP" },
  { id: "klarna",     name: "Klarna",     icon: "K"  },
  { id: "ideal",      name: "iDeal",      icon: "iD" },
];

const Betaalmethode = () => {
  const movie = useLoaderData() as Movie;
  const [searchParams] = useSearchParams();

  const [gekozenMethode, setGekozenMethode] = useState<string | null>(null);

  const params = new URLSearchParams(searchParams);
  if (gekozenMethode) {
    params.set("methode", gekozenMethode);
  }
  const verderLink = `/films/${movie.id}/verwerking?${params.toString()}`;
  const terugLink = `/films/${movie.id}/zitplaatsen?${searchParams.toString()}`;

  return (
    <article>
      <Heading level={1}>Kies een betaalmethode</Heading>

      <div className="betaalmethode__grid">
        {PAYMENT_METHODS.map((methode) => (
          <button
            key={methode.id}
            type="button"
            className={`betaalmethode__option ${methode.id === gekozenMethode ? "betaalmethode__option--active" : ""}`}
            onClick={() => setGekozenMethode(methode.id)}
          >
            <span className="betaalmethode__icon">{methode.icon}</span>
            <span className="betaalmethode__name">{methode.name}</span>
          </button>
        ))}
      </div>

      <footer className="betaalmethode__actions">
        <Button type="secondary" link={terugLink}>
          Terug
        </Button>
        {gekozenMethode && (
          <Button link={verderLink}>
            Verder
          </Button>
        )}
      </footer>
    </article>
  );
};

export default Betaalmethode;