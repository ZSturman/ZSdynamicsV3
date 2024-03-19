import Link from "next/link";
import { useRouter } from "next/navigation";

const NavLinks = () => {
  const router = useRouter();

  return (
    <div className="w-full flex flex-row justify-evenly items-center">
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "bio" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
      >
        <div className="h-16 w-16 rounded-full bg-black"></div>- Bio -
      </button>
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "studio" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
      >
        <div className="h-16 w-16 rounded-full bg-black"></div>- Studio -
      </button>
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "experience" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
      >
        <div className="h-16 w-16 rounded-full bg-black"></div>- Experience -
      </button>
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "contact" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
      >
        <div className="h-16 w-16 rounded-full bg-black"></div>- Contact -
      </button>
    </div>
  );
};

export default NavLinks;
