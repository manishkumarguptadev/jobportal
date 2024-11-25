function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 py-2 text-center">
      <small className="opacity-50">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </small>
    </footer>
  );
}
export default Footer;
