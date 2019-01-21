import React from 'react';
/**
 * randers the footer.
 */
export default function Footer() {
  return (
    <footer id="main-footer" className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col text-center py-4">
            <h3>Authors Haven</h3>
            <p>
              Copyright &copy; {new Date().getFullYear()} Zeus Technologies,
              Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
