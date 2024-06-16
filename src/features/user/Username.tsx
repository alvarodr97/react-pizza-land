import useUsername from "../../hooks/useUsername";

export default function Username() {
  const username = useUsername();

  if (!username) return null;

  return (
    <span className="hidden text-sm font-semibold md:block">{username}</span>
  );
}
