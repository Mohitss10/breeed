"use client";
import { ArrowLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AccountSidebar({
  activeTab,
  setActiveTab,
  closeSidebar,
}) {
  const router = useRouter();

  const handleBack = () => {
    // Go to previous page
    router.back();
  };

  return (
    <div className="flex flex-col space-y-6">
      {/* Back & Close buttons */}
      <div className="flex items-center justify-between md:justify-start">
        <button
          onClick={handleBack}
          className="flex items-center text-gray-500 hover:text-gray-700 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>
        <button
          onClick={closeSidebar}
          className="md:hidden p-1 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col space-x-4 md:space-x-0 md:space-y-2">
        <p
          onClick={() => {
            setActiveTab("account");
            closeSidebar();
          }}
          className={`py-2 px-3 rounded-md cursor-pointer font-medium text-sm ${
            activeTab === "account"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Account
        </p>

        <p
          onClick={() => {
            setActiveTab("preferences");
            closeSidebar();
          }}
          className={`py-2 px-3 rounded-md cursor-pointer font-medium text-sm ${
            activeTab === "preferences"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Preferences
        </p>

        <p
          onClick={() => {
            setActiveTab("contact");
            closeSidebar();
          }}
          className={`py-2 px-3 rounded-md cursor-pointer font-medium text-sm ${
            activeTab === "contact"
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          Contact
        </p>
      </div>
    </div>
  );
}
