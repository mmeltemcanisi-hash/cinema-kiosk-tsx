import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import Spinner from "../components/Spinner/Spinner";
import "../components/Logo/Logo.css";
import "./Verwerking.css";

const Verwerking = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/films/${id}/klaar?${searchParams.toString()}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [id, navigate, searchParams]);

  return (
    <article>
      <div className="logo">
        <span className="logo__star">&#9733;</span>
        <span className="logo__brand">KINEPOLIS</span>
      </div>

      <div className="verwerking__card">
        <p>Hou je kaart tegen de terminal</p>
        <Spinner />
      </div>
    </article>
  );
};

export default Verwerking;
