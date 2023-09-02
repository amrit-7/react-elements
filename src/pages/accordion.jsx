import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const data = [
    {
      id: 1,
      label: "React.js",
      content: "React is a frontend library",
    },
    {
      id: 2,
      label: "Node.js",
      content: "Node.js is a backend framework",
    },
    {
      id: 3,
      label: "Next.js",
      content: "Next.js is fullstack development framework",
    },
  ];
  return (
    <div>
      <Accordion data={data} />
    </div>
  );
};

export default AccordionPage;
