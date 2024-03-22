import { useRouter, useSearchParams } from "next/navigation";
import { FaUserTie } from "react-icons/fa";
import { GiWarpPipe } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { GiEasel } from "react-icons/gi";


const NavLinks = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedContent = searchParams.get("content");

  const handleNavClick = (page: string) => {
    router.push(`?${new URLSearchParams({ content: page }).toString()}`, { scroll: false})
    const section = document.querySelector("#contentSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="w-full flex flex-row justify-evenly items-center">
      <button

        onClick={() => handleNavClick("bio")}
        className="flex flex-col items-center justify-center py-5"
      >
        <div className={`h-12 w-12 sm:h-16 sm:w-16 text-3xl flex justify-center items-center rounded-full ${selectedContent === "bio" && "bg-dark-accent"}`}><FaUserTie /></div>Bio
      </button>
      <button
        onClick={() => handleNavClick("studio")}
        className="flex flex-col items-center justify-center py-5"
        
      >
        <div className={`h-12 w-12 sm:h-16 sm:w-16 text-3xl flex justify-center items-center  rounded-full ${selectedContent === "studio" && "bg-dark-accent"}`}>
          <GiEasel />
          </div>Studio
      </button>
      <button
        onClick={() => handleNavClick("workflow")}
        className="flex flex-col items-center justify-center py-5"
        
      >
        <div className={`h-12 w-12 sm:h-16 sm:w-16 text-3xl flex justify-center items-center  rounded-full ${selectedContent === "workflow" && "bg-dark-accent"} ${selectedContent ==="workflow" ? "active" : ""}`}>
          <GiWarpPipe />
          </div>Workflow
      </button>
      <button
        onClick={() => handleNavClick("contact")}
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
