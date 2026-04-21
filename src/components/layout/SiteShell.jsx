import UniverseScene from "../canvas/UniverseScene";

export default function SiteShell({ children }) {
  return (
    <div className={cx("site-shell", className)}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <UniverseScene />
      {children}
    </div>
  );
}
