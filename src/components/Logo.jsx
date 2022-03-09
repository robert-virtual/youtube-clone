import { AiFillYoutube } from "react-icons/ai";

export default function Logo({ className = "" }) {
  return (
    <div className={"flex items-center " + className}>
      <AiFillYoutube size={30} color="red" className="inline" />
      <span className="text-2xl font-bold -tracking-wider">YouTube</span>
    </div>
  );
}
