import "./Seat.css";

type SeatStatus = "available" | "taken" | "selected";

type SeatProps = {
  id: string;
  status: SeatStatus;
  onClick: () => void;
};

const Seat = ({ id, status, onClick }: SeatProps) => {
  const disabled = status === "taken";

  return (
    <button
      type="button"
      className={`seat seat--${status}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={`Stoel ${id}, ${status}`}
    >
      {id}
    </button>
  );
};

export default Seat;
