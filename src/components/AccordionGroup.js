import React from "react";
import CustomAccordion from "./CustomAccordion"; // Importing CustomAccordion

export default function AccordionGroup({ children }) {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  React.useEffect(() => {
    // Automatically set the first unchecked item as expanded
    const firstUncheckedIndex = React.Children.toArray(children).findIndex(
      (child) => !child.props.defaultChecked
    );
    setExpandedIndex(firstUncheckedIndex === -1 ? null : firstUncheckedIndex);
  }, [children]);

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          expanded: index === expandedIndex,
          onChange: () => handleToggleExpand(index),
        })
      )}
    </div>
  );
}
