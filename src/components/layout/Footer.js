import React from 'react';
/**
   * randers the footer.
   */
export default function footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} Authors Haven
    </footer>
  );
}
