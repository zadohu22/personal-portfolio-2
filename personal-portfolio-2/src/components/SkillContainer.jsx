import React from "react";

const SkillContainer = ({ children, text }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { className: "tech-icons" });
      })}
      <p className='mb-8 text-black'>{text}</p>
    </div>
  );
};

export default SkillContainer;
