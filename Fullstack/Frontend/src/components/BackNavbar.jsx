import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Home, ChevronRight } from "lucide-react";

const BackNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPage =
    location.pathname.split("/").filter(Boolean).pop() || "Home";

  const formatTitle = (text) =>
    decodeURIComponent(text)
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  // Home page par back navbar hide rahega
  if (location.pathname === "/") return null;

  return (
    <div className="sticky top-[80px] z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="flex min-h-[52px] items-center justify-between gap-3 px-4 sm:px-6 md:px-10 lg:px-[100px]">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => {
            if (window.history.state?.idx > 0) {
              navigate(-1);
            } else {
              navigate("/");
            }
          }}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-[#7A1F3D] hover:text-white"
          aria-label="Go back"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {/* Breadcrumb */}
        <div className="flex min-w-0 items-center gap-2 overflow-hidden text-sm">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-1.5 text-gray-500 transition-colors hover:text-[#7A1F3D]"
          >
            <Home size={15} />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <ChevronRight
            size={15}
            className="shrink-0 text-gray-400"
          />

          <span className="truncate font-semibold text-[#7A1F3D]">
            {formatTitle(currentPage)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackNavbar;