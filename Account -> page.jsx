"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useState } from "react";

export default function AccountDetails() {
  const { user } = useUser();
  const { signOut } = useClerk();

  const [name, setName] = useState(user?.fullName || "");
  const [isEditingName, setIsEditingName] = useState(false);
  const [modalType, setModalType] = useState(null); // signOut | signOutAll | delete

  const handleNameChange = async () => {
    if (!name.trim()) return;
    await user.update({
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1] || "",
    });
    setIsEditingName(false);
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (file) await user.setProfileImage({ file });
  };

  const handleConfirm = async () => {
    if (modalType === "signOut") await signOut();
    if (modalType === "signOutAll") await signOut({ session: "all" });
    if (modalType === "delete") {
      await user.delete();
      await signOut({ redirectUrl: "/" });
    }
    setModalType(null);
  };

  return (
    <div className="max-w-2xl w-full space-y-6">

      {/* ================= ACCOUNT DETAILS ================= */}
      <div
        className="rounded-xl shadow-md p-4 space-y-4 transition-colors"
        style={{
          backgroundColor: "var(--secondary)",
          border: "1px solid var(--accent)",
        }}
      >
        <h2 className="text-lg font-semibold text-theme">Account Details</h2>
        <hr className="border-theme/30" />

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img
            src={user?.imageUrl}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />

          <div className="flex-1 space-y-2 text-center sm:text-left">
            <p className="text-xl font-medium text-theme">{user?.fullName}</p>
            <p className="text-theme/70 break-words">
              {user?.primaryEmailAddress?.emailAddress}
            </p>

            {/* Change Avatar */}
            <label
              className="
                inline-block mt-2 px-3 py-1.5
                rounded-md border cursor-pointer
                transition-all hover:scale-105
                btn-theme
              "
              style={{ borderColor: "var(--accent)" }}
            >
              Change avatar
              <input type="file" className="hidden" onChange={handleAvatarChange} />
            </label>

            {/* ================= NAME EDIT ================= */}
            <div className="mt-4">
              <p className="text-sm text-theme/70">Full Name</p>

              {isEditingName ? (
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 rounded-md border text-sm"
                    style={{
                      borderColor: "var(--accent)",
                      backgroundColor: "var(--background)",
                      color: "var(--text-color)",
                    }}
                  />
                  <button
                    onClick={handleNameChange}
                    className="px-3 py-1 rounded-md btn-theme"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditingName(false)}
                    className="px-3 py-1 rounded-md border btn-theme"
                    style={{ borderColor: "var(--accent)" }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditingName(true)}
                  className="
                    mt-2 px-3 py-1 rounded-md
                    border transition-colors
                    btn-theme
                  "
                  style={{ borderColor: "var(--accent)" }}
                >
                  Change full name
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= SYSTEM ================= */}
      <div
        className="rounded-xl shadow-md p-4 space-y-4 transition-colors"
        style={{
          backgroundColor: "var(--secondary)",
          border: "1px solid var(--accent)",
        }}
      >
        <h2 className="text-lg font-semibold text-theme">System</h2>
        <hr className="border-theme/30" />

        {/* Sign out */}
        <div className="flex justify-between items-center">
          <p className="text-theme">Sign out</p>
          <button
            onClick={() => setModalType("signOut")}
            className="px-3 py-1 rounded-md border btn-theme"
            style={{ borderColor: "var(--accent)" }}
          >
            Sign out
          </button>
        </div>

        {/* Sign out all */}
        <div className="flex justify-between items-center">
          <p className="text-theme">Sign out of all sessions</p>
          <button
            onClick={() => setModalType("signOutAll")}
            className="px-3 py-1 rounded-md border btn-theme"
            style={{ borderColor: "var(--accent)" }}
          >
            Sign out all
          </button>
        </div>

        {/* Delete */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-theme">Delete account</p>
            <p className="text-xs text-theme/70">
              Permanently delete your account and data
            </p>
          </div>
          <button
            onClick={() => setModalType("delete")}
            className="
              px-3 py-1 rounded-md
              border transition-colors
              btn-theme
            "
            style={{ borderColor: "var(--accent)" }}
          >
            Delete
          </button>
        </div>
      </div>

      {/* ================= CONFIRM MODAL ================= */}
      {modalType && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <div
            className="rounded-xl shadow-xl p-6 w-80 text-center"
            style={{
              backgroundColor: "var(--secondary)",
              border: "1px solid var(--accent)",
            }}
          >
            <h2 className="text-lg font-semibold text-theme mb-2">
              {modalType === "delete"
                ? "Delete Account?"
                : modalType === "signOutAll"
                ? "Sign out of all sessions?"
                : "Sign out?"}
            </h2>

            <p className="text-theme/70 text-sm mb-4">
              {modalType === "delete"
                ? "This action is permanent and cannot be undone."
                : "Are you sure you want to continue?"}
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-2 rounded-md border btn-theme"
                style={{ borderColor: "var(--accent)" }}
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-md btn-theme-logout"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
