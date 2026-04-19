import { cx } from "../../lib/cx";

export default function SiteShell({ children, className }) {
  return (
    <div className={cx("site-shell", className)}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      {children}
    </div>
  );
}
