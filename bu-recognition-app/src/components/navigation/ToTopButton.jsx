import React, { Fragment, useState, useEffect, useRef } from 'react';

const ToTopButton = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const handleToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <Fragment>
      <div hidden={goingUp} className="to-top pointer" onClick={handleToTop}>
        <img src={process.env.PUBLIC_URL + '/up.png'} width="32" />
      </div>
    </Fragment>
  );
}

export default ToTopButton;
