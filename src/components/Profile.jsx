import React from "react";
import { forwardRef } from "react";
import { useId } from "react";

const Profile = forwardRef(function Profile(
  { img, className, options, label, ...props },
  ref
) {
  const id = useId();
  return (
    <>
      <div className="absolute">
        {img && <img className="h-16 w-16 rounded-full object-cover"src={img} alt="logo" />}
        {label && (
          <label className="font-semibold text-lg text-black">{label}</label>
        )}
        <select id={id} ref={ref} className={className} {...props}>
          {options?.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
});

export default Profile;
