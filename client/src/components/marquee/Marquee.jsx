import './Marquee.scss'

export default function Marquee({r}) {
  const text = " mainere ".repeat(r);

  return (
    <div className="scrolling-text">
      <span className="huge text">{text}</span>
      <span className="huge text">{text}</span>
    </div>
  );
}
