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
            <p>
              Copyright &copy; {new Date().getFullYear()} Authors Haven - Zeus Technologies,
              Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
