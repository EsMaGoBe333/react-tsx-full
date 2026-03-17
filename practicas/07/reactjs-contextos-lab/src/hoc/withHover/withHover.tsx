import { useState } from "react";

function withHover<P>(WrappedCmp: React.ComponentType<P>) {
  return (props: P) => {
    const [isMouseOn, setIsMouseOn] = useState(false);

    const styles: React.CSSProperties = {
      opacity: isMouseOn ? "0.4" : "1",
      width: "max-content",
    };

    return (
      <div
        style={styles}
        onMouseEnter={() => setIsMouseOn(true)}
        onMouseLeave={() => setIsMouseOn(false)}
      >
        <WrappedCmp {...props} />
      </div>
    );
  };
}

export default withHover;