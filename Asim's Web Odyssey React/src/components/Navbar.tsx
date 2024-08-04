import { Flex } from "@chakra-ui/react";

interface props {
  onSelectTab: (tab: string) => void;
  tab: string;
}

const Navbar = ({ onSelectTab, tab }: props) => {
  return (
    <div
      style={{
        transition: "box-shadow 0.3s ease", // transition for box-shadow
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)", // default shadow
        backdropFilter: "blur(100px)",
        background: "rgba(0,0,0,0.5)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 1px 5px rgba(255, 255, 255, 0.5)"; // red shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)"; // default shadow
      }}
      className="navBar"
    >
      <Flex justifyContent={"space-evenly"} padding="20px">
        <button
          className={tab === "home" ? "selected-tab" : "tab"}
          onClick={() => onSelectTab("home")}
        >
          Home 🚀
        </button>
        <button
          className={tab === "skills" ? "selected-tab" : "tab"}
          onClick={() => onSelectTab("skills")}
        >
          Skills 🎯
        </button>
        <button
          className={tab === "education" ? "selected-tab" : "tab"}
          onClick={() => onSelectTab("education")}
        >
          Education 🎓
        </button>
        <button
          className={tab === "contact" ? "selected-tab" : "tab"}
          onClick={() => onSelectTab("contact")}
        >
          Get in Touch 📩{" "}
        </button>
      </Flex>
    </div>
  );
};

export default Navbar;
