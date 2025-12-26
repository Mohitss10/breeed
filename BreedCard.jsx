"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BreedCard = ({ breed, species }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;

    setLoading(true);

    // slight delay so loader is visible before route change
    setTimeout(() => {
      router.push(`/breed/${species}/${breed.name}`);
    }, 300);
  };

  return (
    <>
      {/* ================= FULLSCREEN LOADER ================= */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
                        bg-black/30 backdrop-blur-sm">
          <div className="flex gap-2 h-8">
            <span className="loader-bar"></span>
            <span className="loader-bar"></span>
            <span className="loader-bar"></span>
            <span className="loader-bar"></span>
          </div>
        </div>
      )}

      {/* ================= CARD ================= */}
      <div
        className="bg-secondary rounded-lg overflow-hidden shadow-theme
                   hover:shadow-lg transition-theme cursor-pointer"
        onClick={handleClick}
      >
        <div
          className="w-full h-38 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAonuIYXLDmgjAqn1Wb2XspSNCz45Nd0qF4AjR6OskKdQdW0J3k3jDorqyAuLhaTGuEzRxcnCZt6UhZswZkIbq26uUBYnXfXSnuEXnqqQ7gVV0uDP0t6gDn10--miKyoxiY6GPYEiSqZUK7vk7uqsd0qOMzEdFykYJaYhE2_qymWUugvxyDnlRWlw4trV8cBikZVKiOpPq9-AQkXNoAnWNmJIcHRdVt3kn-ZETjW5sA8zWqrWmpY97LU1gnMRvoHn6PvcwpL4GKsZNO")',
          }}
        />
        <div className="p-4 text-theme">
          <h3 className="text-lg font-bold">{breed?.name}</h3>
          <p className="text-sm text-theme/70 mb-2">
            {breed?.originInIndia}
          </p>
          <p className="text-sm">{breed?.characteristics}</p>
        </div>
      </div>
    </>
  );
};

export default BreedCard;
