import { useRouter, useSearchParams } from "next/navigation";
import { FaUserTie } from "react-icons/fa";
import { GiWarpPipe } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { GiEasel } from "react-icons/gi";


const NavLinks = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedContent = searchParams.get("content");

  return (
    <div className="w-full flex flex-row justify-evenly items-center">
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "bio" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
      >
        <div className={`h-12 w-12 sm:h-16 sm:w-16 text-3xl flex justify-center items-center rounded-full ${selectedContent === "bio" && "bg-dark-accent"}`}><FaUserTie /></div>Bio
      </button>
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "studio" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
        
      >
        <div className={`h-12 w-12 sm:h-16 sm:w-16 text-3xl flex justify-center items-center  rounded-full ${selectedContent === "studio" && "bg-dark-accent"}`}>
          <GiEasel />
          </div>Studio
      </button>
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "workflow" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
        
      >
        <div className={`h-12 w-12 sm:h-16 sm:w-16 text-3xl flex justify-center items-center  rounded-full ${selectedContent === "workflow" && "bg-dark-accent"} ${selectedContent ==="workflow" ? "active" : ""}`}>
          <GiWarpPipe />
          </div>Workflow
      </button>
      <button
        onClick={() => router.replace(`?${new URLSearchParams({ content: "contact" }).toString()}`, { scroll: false})}
        className="flex flex-col items-center justify-center py-5"
        
      >
        <div className={`h-12 w-12 sm:h-16 sm:w-16 text-3xl flex justify-center items-center  rounded-full ${selectedContent === "contact" && "bg-dark-accent"} ${selectedContent ==="contact" ? "active" : ""}`}>
          <HiDotsHorizontal />
          </div>Contact
      </button>
    </div>
  );
};

export default NavLinks;
