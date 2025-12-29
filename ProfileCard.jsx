"use client";
import Link from "next/link";

export default function ProfileCard({
  user,
  signOut,
  profileOpen,
  setProfileOpen,
}) {
  if (!profileOpen) return null;

  return (
    <>
      {/* backdrop for click outside */}
      <div
        className="fixed inset-0 bg-transparent z-[9998]"
        onClick={() => setProfileOpen(false)}
      ></div>

      {/* actual card */}
      <div
        id="profile-card"
        className="fixed right-4 top-19 w-80 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ease-out z-[9999]"
        style={{
          backgroundColor: "var(--secondary-bg)",
          color: "var(--text-color)",
        }}
      >
        {/* Header */}
        <div
          className="relative h-24"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary))",
          }}
        >
          <div className="absolute inset-0 flex gap-4 items-center border-b border-gray-600 justify-center">
            <img
              src={user.imageUrl}
              alt="Profile"
              className="
        w-16 h-16 rounded-full object-cover
        border-2 border-white shadow-md mb-1
      "
            />
            <h2 className="font-semibold text-xl ">
              {user.fullName || "User"}
            </h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="py-3 text-center border-top">
          <p className=" text-sm break-words">
            {user.primaryEmailAddress?.emailAddress || "No email available"}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col items-center space-y-3">
            <Link
              href="/profile/account"
              onClick={() => setProfileOpen(false)}
              className="cursor-pointer w-3/4 font-medium text-sm py-2 rounded-lg  transition btn-theme text-center"
            >
              Account
            </Link>
          </div>

          <hr className="my-4 border-theme" />

          <button
            onClick={() => {
              setProfileOpen(false);
              signOut({ redirectUrl: "/" });
            }}
            className="cursor-pointer w-3/4 mx-auto py-2 rounded-lg font-medium transition btn-theme"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
