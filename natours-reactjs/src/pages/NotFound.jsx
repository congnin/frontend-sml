import React from 'react';

function NotFound() {
  console.log('fuck you');
  return (
    <main className="main">
      <div className="error">
        <div className="error__title">
          <h2 className="heading-secondary heading-secondary--error">
            Opps! Page not found!
          </h2>
          <h2 className="error__emoji">😢 🤯</h2>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
